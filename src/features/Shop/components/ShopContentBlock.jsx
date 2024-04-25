import React from 'react'
import { MdOutlineStar } from 'react-icons/md'


const ShopContentBlock = ({item}) => {
  return (
    <div className="">
            <div className="w-[280px] h-[360px] bg-[#93B9A2] flex justify-center relative rounded-sm shadow-[0_0_20px_3px_rgba(0,0,0,0.3)]">
                <img className="h-[100%] w-[100%] object-contain absolute"
                src={item.image} alt="img"/>
            </div>
            <div className="">
                <p className="">{item.name}</p>
                <p className="flex items-center">₹{item.price} <span className="mx-4">|</span> {item.rateing}<MdOutlineStar className="text-orange-400"/></p>
            </div>
    </div>
  )
}

export default ShopContentBlock