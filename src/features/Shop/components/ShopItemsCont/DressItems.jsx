import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const DressItems = ({item}) => {
  return (
    <div className="w-[200px] h-[280px] flex flex-col justify-center items-center">
      <div className="w-[200px] h-[280px] bg-[#93B9A2]  relative">
        <img className="h-[100%] w-[100%] object-contain absolute" src={item.image} alt="img"/>
      </div>
      <div className="flex flex-col">
          <p className="">{item.name}</p>
          <p className="flex items-center">₹{item.price} <span className="mx-4">|</span> {item.rateing}<MdOutlineStar className="text-orange-400"/></p>
      </div>
    </div>
  )
}

export default DressItems