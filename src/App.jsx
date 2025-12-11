import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Paste from './pages/Paste';
import ViewPaste from './pages/ViewPaste';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pastes", element: <Paste /> },
      { path: "/pastes/:id", element: <ViewPaste /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;