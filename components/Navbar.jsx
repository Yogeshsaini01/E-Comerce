import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from "../assets/assets"
import { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-[10vh] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'>
          <img src={assets.logo} className='w-36' alt="" />

        </Link>

        <ul className='hidden sm:flex gap-5  text-green-800'>
          <NavLink to={'/'} className='flex flex-col items-center gap-1'>
            <p className='a'>Home</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

          <NavLink to={'/collection'} className='flex flex-col items-center gap-1'>
            <p className='a'>Collection</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

          <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
            <p className='a'>About</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

          <NavLink to={'/contact'} className='flex flex-col items-center gap-1'>
            <p className='a'>Contact</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

          <NavLink to={'/add'} className='flex flex-col items-center gap-1'>
            <p className='a'>Add</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

          <NavLink to={'/pay'} className='flex flex-col items-center gap-1'>
            <p className='a'>Pay</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-green-700 hidden' />
          </NavLink>

        </ul>
        <div className='flex items-center gap-6'>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />

          <div className='group relative'>
            <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 rounded'>
                <p className='cursor-pointer hover:text-black hover:font-bold'>My Profile</p>
                <p className='cursor-pointer hover:text-black hover:font-bold'>Orders</p>
                <p className='cursor-pointer hover:text-black hover:font-bold'>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={() => { setVisible(true) }} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* sidebar menu for small screen*/}
        <div className={`absolute right-0 bottom-0 top-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => { setVisible(false) }} className='flex items-center gap-4 p-3 cursor-pointer '>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/'}>Home</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/collection'}>Collection</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/about'}>About</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/contact'}>Contact</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/add'}>Add</NavLink>
            <NavLink onClick={() => { setVisible(false) }} className='py-2 pl-6 border' to={'/pay'}>Pay</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
