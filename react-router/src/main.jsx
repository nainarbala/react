import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'


const router = createBrowserRouter([
  {
    "path": "/",
    element: <Home></Home>,
    errorElement: <NotFound></NotFound>
  },
  {
    "path": "login",
    "element": <Login></Login>
  }

]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
