
import { useTypingStore } from '@/store/typing-store'
import ControlPanel from './ControlPanel'
import { motion } from 'framer-motion';
import TypingArea from './TypingArea';
import ResultCard from './ResultCard';

const TypingTest = () => {
 const { status } = useTypingStore();


  return (
    <div>

      <ControlPanel />

      {status != 'completed' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <TypingArea />


        </motion.div>
      )}

      {status == 'completed' && <ResultCard />}
    </div>
  )
}

export default TypingTest