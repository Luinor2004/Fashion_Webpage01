import { Link } from "react-router-dom"



const OfferZone = () => {
  return (
    <div className="px-[150px] py-[110px]">
      <div className="bg-[#C2EFD4] w-[1100px] h-[420px] flex justify-evenly">
        <div className="w-[320px] h-[400px]  relative">
          <img className="top-[22px] w-[100%] h-[100%] object-contain absolute" src="/images/exclusiveOffer.png" alt=""/>
        </div>
        <div className="py-[50px]">
          <p className="pb-[20px] text-4xl font- font-semibold text-[#224f34]">Exclusive offer</p>
          <div className="pb-[30px] font-medium text-[#224f34]">
            <p className="pb-[2px]">Unlock the ultimate style upgrade with our exclusive</p>
            <p className="py-[2px]">offer Enjoy savings of up to 40% off on our latest New</p>
            <p className="pt-[2px]">Arrivals</p>
          </div>
            <div className="flex gap-6 pb-7">
              <div className="w-[70px] h-[70px] bg-white flex flex-col justify-center items-center">
                <p className="text-[23px] text-[#224f34] font-medium">06</p>
                <p className="text-[12px] text-[#224f34] font-medium">Days</p>
              </div>
              <div className="w-[70px] h-[70px] bg-white flex flex-col justify-center items-center">
                <p className="text-[23px] text-[#224f34] font-medium">18</p>
                <p className="text-[12px] text-[#224f34] font-medium">Hours</p>
              </div>
              <div className="w-[70px] h-[70px] bg-white flex flex-col justify-center items-center">
                <p className="text-[23px] text-[#224f34] font-medium">48</p>
                <p className="text-[12px] text-[#224f34] font-medium">Min</p>
              </div>
            </div>
            <div className=" w-[160px] h-[50px] bg-[#224f34] flex justify-center items-center">
              <Link className="text-white text-[15px]" to="">BUY NOW</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OfferZone