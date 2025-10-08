import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import { Component } from "react";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            path:"/",
            loader:()=>fetch('homeData.json'),
            Component:Home
        },
        {
          path:"/apps",
          Component:Apps
        }
    ]
  },
]);
export default router