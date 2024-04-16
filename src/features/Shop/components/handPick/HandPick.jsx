import HandPickImg from "./HandPickImg"

const handPickImag=[
  {
    image:'images/handPickImg/hand_Model-01.png',
    type:'Accessories',
    content:'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
    color:'#D3E2D7'
  },
  {
    image:'images/handPickImg/hand_Model-02.png',
    type:'Dresses',
    content:'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
    color:'#EFEFEF'
  },
  {
    image:'images/handPickImg/hand_Model-03.png',
    type:'Outerwear',
    content:'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
    color:'#DADADC'
  }
]



const HandPick = () => {
  return (
    <div className="w-full pt-7">
        <p className="flex justify-center text-4xl text-[#224f34] font-bold font-mono ">Designer Clothes For You</p>
        <p className="flex justify-center py-8 text-[#224f34] font-medium">
        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
        </p>
        <div className="">
          <div className="flex justify-evenly px-5">
            {handPickImag &&
            handPickImag.map((item, index)=>(
              <HandPickImg key={index} item={item}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default HandPick