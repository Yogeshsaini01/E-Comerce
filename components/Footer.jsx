/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nostrum. Quae, consequatur minus neque culpa nemo, quia illum numquam, voluptate architecto itaque repellat.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li>Home</li>
            <li>About us</li>
            <li>Devilery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-1234567890</li>
            <li>mogaliStore@gmail.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright&copy;  forever.com || All Right Reversed.</p>
        </div>
    </div>
  )
}

export default Footer
