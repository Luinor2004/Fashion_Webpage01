import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const AuthSection = () => {
  return (
    <div className='flex flex-row  items-center gap-10 ml-[130px] 
    '>
        <IoBagOutline/>
        <button className='text-lg text-[#224F34] w-[135px] h-[45px] border-solid border-2 border-black rounded py-1 px-4'><Link to="/">Login</Link></button>
    </div>
  )
}

export default AuthSection