import { createBrowserRouter } from "react-router-dom";
import {LandingPage} from "./pages/Landing";
import { ShopPage } from "./features/Shop";
import ShopItems from "./features/Shop/components/ShopItemsCont/ShopItems";

 


export const router=createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/shop", element:<ShopPage/>},
    {path:"/See", element:<ShopItems/>}
])