import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotFound from "./Pages/Notfound.jsx";
import Home from "./Pages/Home.jsx";
import Explore from "./Pages/Explore.jsx"
import Bookmarks from "./Pages/Bookmarks.jsx"
import Layout from "./Routes/Layout.jsx";
import Lists from "./Pages/Lists.jsx"
import Messages from "./Pages/Messages.jsx"
import More from "./Pages/More.jsx"
import Notifications from "./Pages/Notifications.jsx"
import Profile from "./Pages/Profile.jsx"
import UserProfile from "./Pages/UserProfile.jsx";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import TweetProvider from "./providers/TweetProvider.jsx";


export const router = createBrowserRouter( [
 
  {
    path:"/",
    element:<App/>
  },
  {path:"/",
   element:<Layout/>,
   children:[
    
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/explore",
      element:<Explore/>
    },
    {
      path:"/notifications",
      element:<Notifications/>
    },
    {
      path:"/messages",
      element:<Messages />
    },
    {
      path:"/bookmarks",
      element:<Bookmarks/>
    },
    {
      path:"/lists",
      element:<Lists />
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/profile/:userName",
      element:<Profile/>
    },
    {
      path:"/profile/@Bradley",
      element:<UserProfile/>
    },
    {
      path:"/more",
      element:<More />
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
