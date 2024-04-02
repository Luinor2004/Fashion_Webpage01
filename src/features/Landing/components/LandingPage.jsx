import Navbar from "./Header/Navbar"
import HeroSection from "./HeroSection"

 

const LandingPage = () => {
  return (
    <div className="w-screen h-screen box-border bg-[#c2EFD4] py-5 px-[100px] ">
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default LandingPage