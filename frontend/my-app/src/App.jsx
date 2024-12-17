import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home';
import Blog from './components/Blog';
import Cart from './components/Cart';
import Search from './components/Search';
import Menu from './components/Menu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import Aboutus from './components/Aboutus';
import ProductDetail from './components/productDetail';
import TableBooking from './components/TableBooking';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/aboutus',
        element: <Aboutus />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/productDetail/:id',
        element: <ProductDetail />
      },
      {
        path: '/bookTable',
        element: <TableBooking /> 
      },
      
     
    ]

  },
  
])
   


function App() {
  const [count, setCount] = useState(0)

  return (   
    <>


<RouterProvider router={browserRouter} />


    </>
  )
}

export default App
