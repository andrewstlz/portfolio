import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "/src/style.css";
import RootLayout from "./shared/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Memory from "./pages/Memory";
import Vision from "./pages/Vision";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "memory", element: <Memory /> },
      { path: "vision", element: <Vision /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
