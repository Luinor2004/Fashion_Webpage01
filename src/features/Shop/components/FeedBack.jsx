import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";


const FeedBack = () => {
  return (
    <div className="pt-[150px]">
        <div className="text-[#224f34] text-4xl
        font-semibold font-
         flex justify-center pb-[80px]">Feedback Corner</div>
         <div className="flex justify-evenly pb-[80px]">
            <div className="w-[370px] h-[190px] flex flex-col p-3 shadow-2xl">
                <div className=" text-[#224f34] "><FaQuoteLeft /></div>
                <p className="py-5 text-[#224f34] text-lg font-medium">Emily Wilson</p>
                <p className=" text-sm text-[#6f6f6f] ">
                The customer experience was exceptional from <br/>
                 start to finish. The website is user-friendly, the <br/>
                  checkout process was smooth, and the clothes <br/>
                   I ordered fit perfectly. I'm beyond satisfied!
                </p>
            </div>
            <div className="w-[370px] h-[190px] flex flex-col p-3 shadow-2xl bg-[#c2efd4]">
                <div className=" text-[#224f34] "><FaQuoteLeft /></div>
                <p className="py-5 text-[#224f34] text-lg font-medium">Sarah Thompson</p>
                <p className=" text-sm text-[#6f6f6f]">
                I absolutely love the quality and style of the <br/>
                 clothing I purchased from this website. customer <br/>
                 service was outstanding, and I received my order <br/>
                 quickly. Highly recommended!
                </p>
            </div>
            <div className="w-[370px] h-[190px] flex flex-col p-3 shadow-2xl">
                <div className=" text-[#224f34] "><FaQuoteLeft /></div>
                <p className="py-5 text-[#224f34] text-lg font-medium">Olivia Martinez</p>
                <p className=" text-sm text-[#6f6f6f]">
                I had a great experience shopping on this <br/>
                 website. The clothes I bought are fashionable <br/>
                  and comfortable. Highly satisfied!
                </p>
            </div>
         </div>
         <div className="flex justify-center pb-[80px]">
            <div className=" text-4xl text-[#224f34]"><RiArrowLeftSLine /></div>
            <div className=" text-4xl text-[#224f34]"><RiArrowRightSLine /></div>
         </div>
    </div>
  )
}

export default FeedBack