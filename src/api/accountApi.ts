import axios from "axios";
import {
  IFindIdForm,
  IFindPasswordForm,
  ILoginForm,
  ISignupForm,
} from "../interfaces/form";

const BASE_URL = "https://229b-175-125-183-151.jp.ngrok.io";
const ID_CHECK_URL = "auth/checkId";
const SIGNUP_URL = "auth/signup";
const LOGIN_URL = "auth/login";
const FIND_ID_URL = "findId";
const FIND_PASSWORD_URL = "sendMail";

export const idCheckPost = (id: string) =>
  axios.post(`${BASE_URL}/${ID_CHECK_URL}`, {
    userId: id,
  });

export const signupPost = (signupForm: ISignupForm) =>
  axios.post(`${BASE_URL}/${SIGNUP_URL}`, {
    userName: signupForm.name,
    userId: signupForm.id,
    password: signupForm.password,
    userEmail: signupForm.email,
  });

export const loginPost = (loginForm: ILoginForm) =>
  axios.post(
    `${BASE_URL}/${LOGIN_URL}`,
    {
      userId: loginForm.id,
      password: loginForm.password,
      remember: loginForm.remember,
    },
    { withCredentials: true }
  );

export const findIdPost = (findIdForm: IFindIdForm) =>
  axios.post(`${BASE_URL}/${FIND_ID_URL}`, {
    userName: findIdForm.name,
    userEmail: findIdForm.email,
  });

export const findPasswordPost = (findPasswordForm: IFindPasswordForm) =>
  axios.post(`${BASE_URL}/${FIND_PASSWORD_URL}`, {
    userId: findPasswordForm.id,
    userEmail: findPasswordForm.email,
  });
