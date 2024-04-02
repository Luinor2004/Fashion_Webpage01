import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './assets/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
