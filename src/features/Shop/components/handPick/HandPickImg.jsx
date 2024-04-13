import React from 'react'

const HandPickImg = ({item}) => {
  return (
    <div>
        <div className="">
            <img src={item.image} alt="img"/>
        </div>
        <div className="">
            <p className="">{item.type}</p>
            <p className="">{item.content}</p>
        </div>
    </div>
  )
}

export default HandPickImg