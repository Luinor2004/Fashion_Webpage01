import React from 'react'

const HandPickImg = ({item}) => {
  return (
    <div className="flex flex-col justify-center items-center ">
        <div style={{backgroundColor:item.color}} className="w-[300px] h-[400px] relative ">
            <img className="top-[2px] h-[100%] w-[100%] object-contain absolute" src={item.image} alt="img"/>
        </div>
        <div className=" flex flex-col justify-center items-center">
            <p className="text-lg font-semibold text-[#373737]">{item.type}</p>
            <p className=""></p>
        </div>
    </div>
  )
}

export default HandPickImg