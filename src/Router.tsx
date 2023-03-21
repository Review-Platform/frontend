import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Contents/home/Home";

import SignUp from "./pages/account/SignUp";
import FindIdForm from "./components/account/forms/FindIdForm";
import FindPasswordForm from "./components/account/forms/FindPasswordForm";
import LoginForm from "./components/account/forms/loginForm/LoginForm";
import FindIdSuccess from "./components/account/FindIdRedirect";
import Product from "./pages/Contents/product/Product";
import Review from "./pages/Contents/review/Review";
import Contents from "./pages/Contents/Contents";
import ProductDetail from "./pages/Contents/productDetail/ProductDetail";
import Login from "./pages/account/login/Login";

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
      },
    ],
  },
]);

export default router;
