import React from 'react'
import { Link } from 'react-router-dom'

const MenuSection = () => {
  return (
    <div className='flex flex-1  justify-end mr-[30px]'>
        <ul className=" flex gap-[50px] uppercase text-lg  text-[#224F34] ">
            <Link to="/Home">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/Features">Features</Link>
            <Link to="/Contact">Contact</Link>
        </ul>


    </div>
  )
}

export default MenuSection