import { createBrowserRouter } from "react-router-dom";
import {LandingPage} from "./pages/Landing";
import { ShopPage } from "./features/Shop";
import ShopItem from "./pages/ShopItem";
import DetailBox from "./features/Shop/components/DetailBox";
import LoginSignup from "./pages/LoginSignup";
import SigninPage from "./features/Landing/components/SigninPage";


 


export const router=createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/shop", element:<ShopPage/>},
    {path:"/items", element:<ShopItem/>},
    {path:"/contact", element:<DetailBox/>},
    {path:"/loginPage", element:<LoginSignup/>},
    {path:"/register", element:<SigninPage/>}



])