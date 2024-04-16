
import DetailBox from '../features/Shop/components/DetailBox'
import FeedBack from '../features/Shop/components/FeedBack'
import HandPick from '../features/Shop/components/handPick/HandPick'
import OfferZone from '../features/Shop/components/OfferZone'
import ShopItems from '../features/Shop/components/ShopItemsCont/ShopItems'

const ShopItem = () => {
  return (
    <>
        <ShopItems/>
        <OfferZone/>
        <HandPick/>
        <FeedBack/>
        <DetailBox/>
       
    </>
  )
}

export default ShopItem