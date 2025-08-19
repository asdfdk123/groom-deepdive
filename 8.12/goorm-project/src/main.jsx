import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./components/layout.jsx"
import Home from "./pages/Home.jsx"
import Profiles from "./pages/Profiles.jsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 공통틀
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "profiles", element: <Profiles /> }, // "/profiles"
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
