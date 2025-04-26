import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Registration from "./components/Registration/Registration.jsx";
import UserProvider from "./components/ContextAPI/UserContext.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>404</div>,
      },
      {
        path: "/registration",
        element: <Registration />,
        errorElement: <div>404</div>,
      },
      {
        path:'/user',
        element: <User/>,
        errorElement: <div>404</div>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>
);
