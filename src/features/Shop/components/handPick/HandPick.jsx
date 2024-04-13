import HandPickImg from "./HandPickImg"

const handPickImag=[
  {
    image:'images/handPickImg/hand_Model-01.png',
    type:'Accessories',
    content:'Complete your ensemble with designer accessories such as <br/> handbags, scarves, belts, and hats.'
  },
  {
    image:'',
    type:'',
    content:''
  },
  {
    image:'',
    type:'',
    content:''
  }
]



const HandPick = () => {
  return (
    <div className="w-full">
        <p className="flex justify-center text-4xl text-[#224f34] font-bold font-mono ">Designer Clothes For You</p>
        <p className="flex justify-center py-8 text-[#224f34] font-medium">
        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
        </p>
        <div className="">
          <div className="">
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