import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './view/Home/Home';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>    
  },
  {
    path:"*",
    element:<h1>404 Not Found</h1>    
  }
])
root.render((<div>
  <RouterProvider router={router}/>
  <Toaster/>
  </div>));

