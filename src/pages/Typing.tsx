import Header from '@/components/Header'
import TypingTest from '@/components/TypingTest'
import { motion } from 'framer-motion'

const Typing = () => {
  return (
    <div className='min-h-screen'>
      <Header />

      <main className='container mx-auto px-4 py-8'>
        <div className='text-center font-poppins'>
          <h2 className='font-semibold text-2xl mb-4'>
            Test Your Typing Speed
          </h2>

          <p className='text-lg'>
            Type through the minds of{' '}
            <motion.span
              className='font-edu  font-bold'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              Kafka
            </motion.span>{' '}
            and{' '}
            <motion.span
              className='font-edu font-bold'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dostoevsky
            </motion.span>
            —where every word carries weight.
          </p>

          <div className='mt-8'>
            <TypingTest />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Typing
