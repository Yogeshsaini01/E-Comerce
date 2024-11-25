/* eslint-disable no-unused-vars */
import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault(); 
        // submit kerna par form reload nahi hoga.
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Suscribe now & get 20% off</p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter Your Email.' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Suscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
