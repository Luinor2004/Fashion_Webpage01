import React from 'react'
import Navbar from '../../../Landing/components/Header/Navbar'
import { Link } from 'react-router-dom'
import DressItems from './DressItems'



const dressImageItems=[
    {
      name:'Spread Collar Shirt',
      image:'/images/dressImage/DressItem_01.png',
      price:'4000.00',
      rateing:'5.0'
    },
    {
      name:'White Solid Formal Shirt',
      image:'/images/dressImage/DressItem_02.png',
      price:'3200.00',
      rateing:'4.9'
    },
    {
      name:'Shine On Me Blouse',
      image:'/images/dressImage/DressItem_03.png',
      price:'3500.00',
      rateing:'4.8'
    },
    {
      name:'Gray Solid Padded Jacket',
      image:'/images/dressImage/DressItem_04.png',
      price:'2700.00',
      rateing:'4.7'
    },
    {
      name:'Printed Loose T-shirt',
      image:'/images/dressImage/DressItem_05.png',
      price:'3325.00',
      rateing:'5.0'
    },
    {
      name:'Summer Wind Crop Shirt',
      image:'/images/dressImage/DressItem_06.png',
      price:'3260.00',
      rateing:'4.7'
    },
    {
      name:'Tailored Jacket',
      image:'/images/dressImage/DressItem_07.png',
      price:'3825.00',
      rateing:'4.9'
    },
    {
      name:'Solid Round Neck T-shirt',
      image:'/images/dressImage/DressItem_08.png',
      price:'3000.00',
      rateing:'5.0'
    }
]







const ShopItems = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
          <p className="text-[32px] text-[#224f34] font-medium pt-8">Our Products</p>
        </div>
        <div className="">
            <ul className="flex justify-center gap-[55px]
             py-9 text-lg text-[#454545]">
              <Link to="">SALE</Link>
              <Link to="">HOT</Link>
              <Link to="">New Arrivals</Link>
              <Link to="">Accessories</Link>
            </ul>
          </div>
          <div className=" px-10 grid gap-[60px] grid-cols-4 grid-rows-2 ">

            {dressImageItems && 
            dressImageItems.map((item, index)=>(
              <DressItems key={index} item={item}/>
            ))}
          </div>
    </div>
  )
}

export default ShopItems