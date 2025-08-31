import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTypingStore } from '@/store/typing-store';

const TypingArea = () => {

    const { currentText, typedText, setTypedText, status } = useTypingStore();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (status === 'running' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [status]);

    const renderText = () => {
        const words = currentText.split(' ');
        const typedWords = typedText.split(' ');

        return words.map((word, wordIndex) => {
            const typedWord = typedWords[wordIndex] || '';
            const isCurrentWord = wordIndex === typedWords.length - 1;

            return (
                <span key={wordIndex} className="inline-block mr-2 mb-1">
                    {word.split('').map((char, charIndex) => {
                        const typedChar = typedWord[charIndex];
                        let className = 'text-muted-foreground';

                        if (typedChar !== undefined) {
                            className = typedChar === char ? 'text-white font-semibold scale-[1.05] transition-transform duration-100'
                                : 'text-red-400';
                        } else if (isCurrentWord && charIndex === typedWord.length) {
                            className = 'border-b-2 border-primary animate-pulse';
                        }

                        return (
                            <span key={charIndex} className={className}>
                                {char}
                            </span>
                        );
                    })}
                    {isCurrentWord && typedWord.length > word.length && (
                        <span className="text-red-500 bg-red-500/20">
                            {typedWord.slice(word.length)}
                        </span>
                    )}
                
                </span>
            );
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
        >

            <div className='p-6 min-h-[200px]'>

                <div className='text-lg'>
                    {renderText()}
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={typedText}
                    onChange={(e) => setTypedText(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-default"
                    // className="w-full h-6 bg-transparent border-b border-gray-500 focus:border-blue-500 dark:border-gray-400 dark:focus:border-blue-400"

                    disabled={status !== 'running'}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                />
            </div>


            {
                status === 'idle' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
                        <p className="text-muted-foreground">Click "Start Test" to begin</p>
                    </div>
                )
            }


        </motion.div >
    )
}

export default TypingArea