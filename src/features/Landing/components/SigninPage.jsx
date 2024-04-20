import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar';

const SigninPage = () => {
  return (
    <div style={{"background": "url('/public/images/LoginURL.png')"}}>
        <Navbar/>
        <div className="text-[#224F34] h-screen flex justify-center items-center bg-cover">
            <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className=" text-4xl text-[#224F34] font-bold text-center mb-6">Register</h1>
                <form className="" action="" method="">
                    <div className="relative my-6">
                        <input type="email" className=" block w-72 py-2.3 px-0 text-sm text-[#224F34] bg-transparent border-0 border-b-2 border-[#224F34] appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-[#224F34] focus:border-blue-600 peer"/>
                        <label htmlFor="" className="absolute text-md text-[#224F34] duration-300 transform translate-y-[-15px] scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email</label>
                        <FaUser className=" absolute top-[4px] right-[-18px]"/>
                    </div>
                    <div className="relative my-6">
                        <input type="password" className="block w-72 py-2.3 px-0 text-sm text-[#224F34] bg-transparent border-0 border-b-2 border-[#224F34] appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-[#224F34] focus:border-blue-600 peer"/>
                        <label htmlFor="" className="absolute text-md text-[#224F34] duration-300 transform translate-y-[-15px] scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Password</label>
                        <FaLock className=" absolute top-[4px] right-[-18px]"/> 
                    </div>
                    <div className="relative my-6">
                        <input type="password" className="block w-72 py-2.3 px-0 text-sm text-[#224F34] bg-transparent border-0 border-b-2 border-[#224F34] appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-[#224F34] focus:border-blue-600 peer"/>
                        <label htmlFor="" className="absolute text-md text-[#224F34] duration-300 transform translate-y-[-15px] scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                        <FaLock className=" absolute top-[4px] right-[-18px]"/> 
                    </div>
                    <div className="flex justify-between items-center">
                        <div className=" flex gap-2 items-center">
                            <input type="checkbox" name="" id="" className=""/>
                            <label htmlFor="Remember Me">I agree to terms and conditions.</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Register</button>
                    <div className="">
                        <span className="m-4">Already Have an account? <Link to="/loginPage" className="text-blue-500">Login in</Link></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SigninPage