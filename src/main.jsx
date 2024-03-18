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
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import Tweet from "./composants/Tweets/Tweet.jsx";
// import TweetContent from "./composants/Tweets/TweetContent/TweetContent.jsx";
// import TweetAvatar from "./composants/Tweets/TweetAvatar.jsx";

export const router = createBrowserRouter([
  // {
  //  path:"/test",
  //  element:<Test/>
  // },
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
      element:<Profile />
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
