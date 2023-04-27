import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Contents/home/Home";
import SignUp from "./pages/account/signup/SignUp";
import FindPasswordForm from "./components/account/forms/findPasswordForm/FindPasswordForm";
import LoginForm from "./components/account/forms/loginForm/LoginForm";
import FindIdSuccess from "./components/account/findIdRedirect/FindIdRedirect";
import Product from "./pages/Contents/product/Product";
import Review from "./pages/Contents/review/Review";
import Contents from "./pages/Contents/Contents";
import ProductDetail from "./pages/Contents/productDetail/ProductDetail";
import Login from "./pages/account/login/Login";
import SignUpSuccess from "./components/account/signUpSuccess/SignUpSuccess";
import FindIdForm from "./components/account/forms/FindIdForm/FindIdForm";
import SignUpForm from "./components/account/forms/signUpForm/SignUpForm";
import Record from "./pages/Contents/Record/Record";
import MyPage from "./pages/Contents/mypage/MyPage";
import ModifyInfo from "./pages/Contents/modifyInfo/ModifyInfo";

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
          {
            path: "record",
            element: <Record />,
          },
          {
            path: "mypage",
            element: <MyPage />,
          },
          {
            path: "modify-info/:id",
            element: <ModifyInfo />,
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
