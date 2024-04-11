import React from 'react'
import ShopItems from './ShopItemsCont/ShopItems'
import DressItems from './ShopItemsCont/DressItems'

const OfferZone = () => {
  return (
    <div>
        <ShopItems/>
        <DressItems/>
        <div className="w-10 h-10 bg-slate-600"></div>
    </div>
  )
}

export default OfferZone