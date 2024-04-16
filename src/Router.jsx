import { createBrowserRouter } from "react-router-dom";
import {LandingPage} from "./pages/Landing";
import { ShopPage } from "./features/Shop";
import ShopItem from "./pages/ShopItem";
import DetailBox from "./features/Shop/components/DetailBox";


 


export const router=createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/shop", element:<ShopPage/>},
    {path:"/items", element:<ShopItem/>},
    {path:"/contact", element:<DetailBox/>}



])