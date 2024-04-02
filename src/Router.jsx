import { createBrowserRouter } from "react-router-dom";
import {LandingPage} from "./pages/Landing";
import { ShopPage } from "./features/Shop";

 


export const router=createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"/shop", element:<ShopPage/>}
    
])