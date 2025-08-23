import Header from '@/components/Header'
import TypingTest from '@/components/TypingTest'
import React from 'react'

const Typing = () => {
  return (
    <div className='min-h-screen'>
      <Header />

      <main className='container mx-auto px-4 py-8'>

        <div className='text-center'>
          <h2>
            Test Your Typing Speed
          </h2>
          <p>
            Type through the minds of Kafka and Dostoevsky—where every word carries weight.
          </p>

          <TypingTest />

        </div>
      </main>


    
    </div>
  )
}

export default Typing