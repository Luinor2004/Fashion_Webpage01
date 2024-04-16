import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const DetailBox = () => {
  return (
    <div className="w-full h-[350px] bg-[#224f34]">
        <div className=" py-16 flex justify-around">
            <div className="">
                <Link className="text-4xl font-semibold font-serif text-white" to="">Rivo</Link>
                <p className="text-white py-[24px] text-lg">Social Media</p>
                <div className="text-[#c2efd4] text-[1.4em] flex gap-7">
                    <Link to=""><CiFacebook /></Link>
                    <Link to=""><FaXTwitter /></Link>
                    <Link to=""><FaInstagram /></Link>
                </div>
            </div>

            <div className="text-[#c2efd4]">
                <Link className="text-lg text-white font-[400]" to="/shop">SHOP</Link>
                <p className="py-2">Products</p>
                <p className="">Overview</p>
                <p className="py-2">Pricing</p>
                <p className="">Releases</p>
            </div>

            <div className="text-[#c2efd4]">
                <p className="text-lg text-white font-[400]">COMPANY</p>
                <p className="py-2">About Us</p>
                <p className="">Contact</p>
                <p className="py-2">News</p>
                <p className="">Support</p>
            </div>

            <div className="">
                <p className="text-lg text-white font-[400]">STAY UP TO DATE</p>
                <div className="py-2 flex">
                    <input
                        type="text"
                        id="id"
                        name="name"
                        placeholder="Enter your email"
                        className="w-[280px] h-[40px] border border-slate- border-[#a3f3be] rounded-l-sm py-3 px-5 outline-none	bg-transparent"
                    />
                    <button className="w-[125px] h-[40px] flex justify-center items-center font-semibold text-[#224f34] bg-[#a3f3be]">SUBMIT</button>
                </div>
            </div>
        </div>


        <div className="flex justify-center items-center gap-8 text-white font-medium">
            <hr className="w-[800px]"/>
            <p className="">Terms</p>
            <p className="">Privacy</p>
            <p className="">Cookies</p>
        </div>
    </div>
  )
}

export default DetailBox