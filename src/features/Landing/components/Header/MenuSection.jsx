import React from 'react'
import { Link } from 'react-router-dom'

const MenuSection = () => {
  return (
    <div className='flex flex-1  justify-end mr-[30px]'>
        <ul className=" flex gap-[50px] uppercase text-lg  text-[#224F34] ">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
        </ul>


    </div>
  )
}

export default MenuSection