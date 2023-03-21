import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Contents/home/Home";

import SignUp from "./pages/account/signup/SignUp";
import FindIdForm from "./components/account/forms/findIdForm/FindIdForm";
import FindPasswordForm from "./components/account/forms/findPasswordForm/FindPasswordForm";
import LoginForm from "./components/account/forms/loginForm/LoginForm";
import FindIdSuccess from "./components/account/findIdRedirect/FindIdRedirect";
import Product from "./pages/Contents/product/Product";
import Review from "./pages/Contents/review/Review";
import Contents from "./pages/Contents/Contents";
import ProductDetail from "./pages/Contents/productDetail/ProductDetail";
import Login from "./pages/account/login/Login";
import SignUpForm from "./components/account/forms/signUpForm/SignUpForm";
import SignUpSuccess from "./components/account/signUpSuccess/SignUpSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Contents />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "product/:id",
            element: <ProductDetail />,
          },
          {
            path: "review",
            element: <Review />,
          },
        ],
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
        children: [
          {
            path: "",
            element: <SignUpForm />,
          },
          {
            path: "success",
            element: <SignUpSuccess />,
          },
        ],
      },
    ],
  },
]);

export default router;
