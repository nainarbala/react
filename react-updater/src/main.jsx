import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Home></Home>,
    "errorElement": <NotFound></NotFound>
  },
  {
    "path": "/login",
    "element": <Login></Login>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
