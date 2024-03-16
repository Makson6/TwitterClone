import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/Notfound.jsx";
import Layout from "./Routes/Layout.jsx";

const router = createBrowserRouter([
  {path:"/",
   element:<App/>,
   children:[
     {
       path: "/",
       element: <App />,
     },
     {
       path: "*",
       element: <NotFound />,
     }
   ]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
