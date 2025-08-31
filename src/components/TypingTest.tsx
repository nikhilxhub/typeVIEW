
import { useTypingStore } from '@/store/typing-store'
import ControlPanel from './ControlPanel'
import { motion } from 'framer-motion';
import TypingArea from './TypingArea';
import ResultCard from './ResultCard';
import { useEffect } from 'react';
import { StatsDisplay } from './Stats';

const TypingTest = () => {
 const { status, updateTimer, addWpmDataPoint, wpm } = useTypingStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (status === 'running') {
      interval = setInterval(() => {
        updateTimer();
        if (wpm > 0) {
          addWpmDataPoint(wpm);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [status, updateTimer, addWpmDataPoint, wpm]);
  return (
    <div className='max-w-4xl mx-auto space-y-6'>

      <ControlPanel />

      {status != 'completed' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StatsDisplay />
          <TypingArea />


        </motion.div>
      )}

      {status == 'completed' && <ResultCard />}
    </div>
  )
}

export default TypingTest