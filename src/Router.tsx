import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/account/Login";
import SignUp from "./pages/account/SignUp";
import FindIdForm from "./components/account/forms/FindIdForm";
import FindPasswordForm from "./components/account/forms/FindPasswordForm";
import LoginForm from "./components/account/forms/LoginForm";
import FindIdSuccess from "./components/account/FindIdRedirect";

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
        children: [
          {
            path: "",
            element: <LoginForm />,
          },
          {
            path: "find-id",
            element: <FindIdForm />,
          },
          {
            path: "find-id/success",
            element: <FindIdSuccess />,
          },
          {
            path: "find-password",
            element: <FindPasswordForm />,
          },
        ],
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
