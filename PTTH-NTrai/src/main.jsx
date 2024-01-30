import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './pages/single/Single.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <Single />,
      }
    ]
  },
  {
    path: "/contact",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <Single />,
      }
    ]
  },
  {
    path: "/faq",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <Single />,
      }
    ]
  },
  {
    path: "/about",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <Single />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
