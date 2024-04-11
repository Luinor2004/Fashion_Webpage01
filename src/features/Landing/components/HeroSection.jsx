
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className=" flex flex-row justify-between pt-[80px]">
        <div className=" pl-6">
            <p className="text-[3em] font-bold font-serif
            text-[#224F34]">
            Discover and <br/> Find Your Own <br/> Fashion!
            </p>

            <p className="pt-7 pb-[50px] text-[#267D49] text-[1.05em] font-[500]">
            Explore our curated collection of stylish<br/>
            clothing and accessories tailored to your<br/>
            unique taste.<br/>
            </p>

            <Link className="border-solid border-2 border-[#224F34]
            bg-[#224F34] text-white py-3 px-7"
            to="/Shop">EXPLORE NOW</Link>
        </div>
        <div className="
        w-[380px] h-[440px] flex justify-center items-end bg-[#6BC785]
         rounded-tl-[25%] rounded-br-[25%] rounded-tr-[40px] rounded-bl-[40px] shadow-[inset_6px_4px_26px_0px_rgba(0,0,0,0.12)]">
        <div className="w-[250px]  h-[400px] flex justify-center ">
              <img className=" h-[101.4%]"
               src="/images/heroSection.png" alt="image"/>
        </div>
        </div>
    </div>
  )
}

export default HeroSection