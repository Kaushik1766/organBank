import React from 'react'
import bgImg from '../assets/bgImg.jpg'
import ConsentForm from '../components/ConsentForm'

function Home() {
  return (
    <>
      <div className='w-full justify-center items-center flex h-[90vh] bg-red-400'>
        <div className='w-1/2 '>
          <h1 className='w-1/2 mx-auto text-white text-4xl font-bold'>Save a life Today</h1>
          <p className='w-1/2 mx-auto text-white text-2xl my-8'>Register yourself for donating organs</p>
          <button className='bg-red-600 w-60 py-5 rounded-2xl mx-auto block text-white' onClick={() => {
            location.href = '#consentForm'
          }}>Donate Now</button>
        </div>
        <div className='w-1/2 items-center justify-center'>
          <img className='mx-auto rounded-2xl' src={bgImg} alt="" />
        </div>
      </div>
      <ConsentForm />
    </>
  )
}

export default Home