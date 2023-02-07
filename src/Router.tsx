import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FindId from "./pages/FindId";
import FindPassword from "./pages/FindPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "find-id",
        element: <FindId />,
      },
      {
        path: "find-password",
        element: <FindPassword />,
      },
    ],
  },
]);

export default router;
