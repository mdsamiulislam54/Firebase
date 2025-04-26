import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Registration from './components/Registration/Registration.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/home",
        element:<Home/>,
        errorElement: <div>404</div>,

      },
      {
        path: "/registration",
        element:<Registration/>,
        errorElement: <div>404</div>,
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >

    </RouterProvider>
   
  </StrictMode>,
)
