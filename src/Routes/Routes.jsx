import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import { Component } from "react";
import Apps from "../Pages/Apps/Apps";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            path:"/apps",
            Component:Apps
        }
    ]
  },
]);
export default router