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
import About from './pages/About/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import FeedBack from './pages/feedback/FeedBack.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';

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
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "feedback",
        element: <FeedBack />,
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
