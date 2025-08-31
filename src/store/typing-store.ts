import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TestStatus = 'idle' | 'running' | 'completed';
export type TimerOption = 30 | 60 | 180;

export interface TestResult {
  wpm: number;
  accuracy: number;
  timeTaken: number;
  category: string;
  timestamp: number;
}

export interface WpmDataPoint {
  time: number;
  wpm: number;
}

interface TypingState {
  // Test configuration
  timerDuration: TimerOption;
  category: string;
  
  // Test state
  status: TestStatus;
  timeLeft: number;
  currentText: string;
  typedText: string;
  
  // Statistics
  wpm: number;
  accuracy: number;
  wpmHistory: WpmDataPoint[];
  testResults: TestResult[];
  
  // Actions
  setTimerDuration: (duration: TimerOption) => void;
  setCategory: (category: string) => void;
  setCurrentText: (text: string) => void;
  setTypedText: (text: string) => void;
  startTest: () => void;
  updateTimer: () => void;
  completeTest: () => void;
  resetTest: () => void;
  calculateStats: () => void;
  addWpmDataPoint: (wpm: number) => void;
  loadNewQuestion: () => void;
}

export const useTypingStore = create<TypingState>()(
  persist(
    (set, get) => ({
      // Initial state
      timerDuration: 60,
      category: 'JavaScript',
      status: 'idle',
      timeLeft: 60,
      currentText: '',
      typedText: '',
      wpm: 0,
      accuracy: 100,
      wpmHistory: [],
      testResults: [],

      // Actions
      setTimerDuration: (duration) => set({ timerDuration: duration, timeLeft: duration }),
      
      setCategory: (category) => set({ category }),
      
      setCurrentText: (text) => set({ currentText: text }),
      
      setTypedText: (text) => {
        const { currentText, status } = get();
        set({ typedText: text });
        get().calculateStats();
        
        // Check if user has typed enough to reach the end of current text
        if (status === 'running' && text.length >= currentText.length) {
          // Load a new question immediately
          get().loadNewQuestion();
        }
      },
      
      startTest: () => {
        const { timerDuration } = get();
        set({ 
          status: 'running', 
          timeLeft: timerDuration,
          typedText: '',
          wpmHistory: []
        });
      },
      
      updateTimer: () => {
        const { timeLeft, status } = get();
        if (status === 'running' && timeLeft > 0) {
          const newTimeLeft = timeLeft - 1;
          set({ timeLeft: newTimeLeft });
          
          if (newTimeLeft === 0) {
            get().completeTest();
          }
        }
      },
      
      completeTest: () => {
        const { wpm, accuracy, timerDuration, category, testResults } = get();
        const timeTaken = timerDuration - get().timeLeft;
        
        const newResult: TestResult = {
          wpm: wpm,
          accuracy,
          timeTaken,
          category,
          timestamp: Date.now()
        };
        
        set({ 
          status: 'completed',
          testResults: [...testResults, newResult]
        });
      },
      
      resetTest: () => {
        const { timerDuration } = get();
        set({ 
          status: 'idle',
          timeLeft: timerDuration,
          typedText: '',
          wpm: 0,
          accuracy: 100,
          wpmHistory: []
        });
      },
      
      calculateStats: () => {
        const { typedText, currentText, timerDuration, timeLeft } = get();
        
        if (!typedText.length) {
          set({ wpm: 0, accuracy: 100 });
          return;
        }
        
        // Calculate WPM
        const timeElapsed = (timerDuration - timeLeft) / 60; // in minutes
        const wordsTyped = typedText.trim().split(' ').length;
        const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
        
        // Calculate accuracy
        let correctChars = 0;
        for (let i = 0; i < typedText.length; i++) {
          if (i < currentText.length && typedText[i] === currentText[i]) {
            correctChars++;
          }
        }
        const accuracy = typedText.length > 0 ? Math.round((correctChars / typedText.length) * 100) : 100;
        
        set({ wpm, accuracy });
      },
      
      addWpmDataPoint: (wpm) => {
        const { wpmHistory, timerDuration, timeLeft } = get();
        const timeElapsed = timerDuration - timeLeft;
        set({ 
          wpmHistory: [...wpmHistory, { time: timeElapsed, wpm }]
        });
      },

      loadNewQuestion: () => {
        const { category, status } = get();
        if (status === 'running') {
          // Import here to avoid circular dependency
          import('@/data/questions').then(({ getRandomQuestion }) => {
            const newQuestion = getRandomQuestion(category);
            set({ 
              currentText: newQuestion.text,
              typedText: '' 
            });
          });
        }
      }
    }),
    {
      name: 'typing-store',
      partialize: (state) => ({
        timerDuration: state.timerDuration,
        category: state.category,
        testResults: state.testResults
      })
    }
  )
);
