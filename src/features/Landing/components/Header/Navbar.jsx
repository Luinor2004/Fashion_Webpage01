import React from 'react'
import TitleSection from './TitleSection'
import MenuSection from './MenuSection'
import AuthSection from './AuthSection'

const Navbar = () => {
  return (
    <div className=' flex flex-row justify-between items-center py-2 px-6 font-medium'>
        <TitleSection/>
        <MenuSection/>
        <AuthSection/>
    </div>
  )
}

export default Navbar