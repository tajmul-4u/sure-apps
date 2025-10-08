import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import { Component } from "react";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Installation from "../Pages/Installation/Installation";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            path:"/",
            loader:()=>fetch('homeData.json'),
            Component:Home
        },
        {
          path:"/apps",
          loader:()=>fetch('allAppsData.json'),
          Component:Apps
        },
        {
          path:"/installation",
          Component:Installation
        }
    ]
  },
]);
export default router