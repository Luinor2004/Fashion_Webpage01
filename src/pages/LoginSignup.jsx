import React from 'react'
import LoginPage from '../features/Landing/components/LoginPage'
import Navbar from '../features/Landing/components/Header/Navbar'
import SigninPage from '../features/Landing/components/SigninPage'


const LoginSignup = () => {
  return (
    <div style={{"background": "url('/public/images/LoginURL.png')"}}>
        <Navbar/>
        <div className="text-[#224F34] h-screen flex justify-center items-center bg-cover">
          <LoginPage/>
        </div>
        {/* <DetailBox/> */}
    </div>
  )
}

export default LoginSignup