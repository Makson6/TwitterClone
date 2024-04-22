import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./composants/App.jsx";
import NotFound from "./Pages/Notfound.jsx";
import Layout from "./Routes/Layout.jsx";
import Profile from "./Pages/Profile.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TweetProvider from "./Context/providers/TweetProvider.jsx";

export const router = createBrowserRouter( [
 
  {
    path:"/",
    element:<App/>
  },
  {path:"/",
   element:<Layout/>,
   children:[

    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/profile/:userName",
      element:<Profile/>
    },
  
   ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <TweetProvider>
         <RouterProvider router={router} />
    </TweetProvider>
  </React.StrictMode>
);
