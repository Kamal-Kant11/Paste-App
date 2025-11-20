import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: 
        <div>
          <NavBar />
          <Home />
        </div>
      },
      {
        path: "/pastes",
        element: 
        <div>
          <NavBar />
          <Paste />
        </div>
      },
      {
        path: "/pastes/:id",
        element: 
        <div>
          <NavBar />
          <ViewPaste />
        </div>
      },
    ]
  );


  return (
    <div className='bg-gray-600 h-screen pt-5 text-white flex justify-center position-'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
