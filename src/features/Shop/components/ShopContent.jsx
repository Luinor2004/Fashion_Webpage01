import React from 'react'
import ShopContentBlock from './ShopContentBlock';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";




const shoppingItems=[
    {
        name:'Regular Fit Long Sleeve Top',
        image:'/images/Model_No-01.png',
        price:'3199.00',
        rateing:'5.0'
    },
    {
        name:'Black Crop Tailored Jacket',
        image:'/images/Model_No-02.png',
        price:'3199.00',
        rateing:'4.8'
    },
    {
        name:'Textured Sunset Shirt',
        image:'/images/Model_No-03.png',
        price:'3199.00',
        rateing:'3.9'
    },
]


const ShopContent = () => {
  return (
    <div className="box-border h-screen px-[100px]">
        <div className="flex flex-col items-center py-[2%]">
            <p className="text-[58px] text-[#224F34]">Best Selling</p>
            <p className="text-[16px] text-[#224F34] pt-6">Get in on the trend with our curated selection of best-selling styles.</p>
        </div>
        <div className="flex justify-center gap-10 ">
            
            {shoppingItems && 
            shoppingItems.map((item,index)=>(
            <ShopContentBlock key={index} item={item}/>
            ))}
        </div>
        <div className="flex justify-center pt-[60px]">
            <Link to="/items" className="w-[150px] h-[45px] flex justify-center items-center
                gap-3 border-solid border-2 border-[#224f34] text-[#224f34]">See all <FaArrowRightLong/></Link>
        </div>
    </div>
  )
}

export default ShopContent