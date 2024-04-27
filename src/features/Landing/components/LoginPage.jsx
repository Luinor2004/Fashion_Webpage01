import { Link } from 'react-router-dom';
import Navbar from './Header/Navbar'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const LoginPage = () => {
  return (
    <div className="">
        <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className=" text-4xl text-[#224F34] font-bold text-center mb-6">Login</h1>
            <form className="" action="" method="">
                <div className="relative my-6">
                    <input type="email" className=" block w-72 py-2.3 px-0 text-sm text-[#224F34] bg-transparent border-0 border-b-2 border-[#224F34] appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-[#224F34] focus:border-blue-600 peer"/>
                    <label htmlFor="" className="absolute text-md text-[#224F34] duration-300 transform translate-y-[-15px] scale-75 top-[-5px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                    <FaUser className=" absolute top-[4px] right-[-18px]"/>
                </div>
                <div className="relative my-6">
                    <input type="password" className="block w-72 py-2.3 px-0 text-sm text-[#224F34] bg-transparent border-0 border-b-2 border-[#224F34] appearance-none dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:text-[#224F34] focus:border-blue-600 peer"/>
                    <label htmlFor="" className="absolute text-md text-[#224F34] duration-300 transform translate-y-[-15px] scale-75 top-[-5px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                    <FaLock className=" absolute top-[4px] right-[-18px]"/> 
                </div>
                <div className="flex justify-between items-center">
                    <div className=" flex gap-2 items-center">
                        <input type="checkbox" name="" id="" className=""/>
                        <label htmlFor="Remember Me">Remember Me</label>
                    </div>
                    <Link to="" className="text-blue-500">Forgot Password?</Link>
                </div>
                <Link to="/"><button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Login</button></Link>
                <div className="">
                    <span className="m-4">New Here? <Link to="/register" className="text-blue-500">Create an Account</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage