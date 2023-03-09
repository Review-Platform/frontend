import axios from "axios";
import { baseApi } from "../utils/instance";
import {
  IFindIdForm,
  IFindPasswordForm,
  ILoginForm,
  ISignupForm,
} from "../../interfaces/form";

const ID_CHECK_URI = "auth/checkId";
const SIGNUP_URI = "auth/signup";
const LOGIN_URI = "auth/login";
const FIND_ID_URI = "findId";
const FIND_PASSWORD_URI = "sendMail";

export const idCheckPost = (id: string) =>
  baseApi.post(ID_CHECK_URI, {
    userId: id,
  });

export const signupPost = (signupForm: ISignupForm) =>
  baseApi.post(SIGNUP_URI, {
    userName: signupForm.name,
    userId: signupForm.id,
    password: signupForm.password,
    userEmail: signupForm.email,
  });

export const loginPost = (loginForm: ILoginForm) =>
  baseApi.post(LOGIN_URI, {
    userId: loginForm.id,
    password: loginForm.password,
    remember: loginForm.remember,
  });

export const rememberPost = (loginForm: ILoginForm) =>
  baseApi.post(`auth/autoLogin`, {
    remember: loginForm.remember,
    userId: loginForm.id,
  });
export const findIdPost = (findIdForm: IFindIdForm) =>
  baseApi.post(FIND_ID_URI, {
    userName: findIdForm.name,
    userEmail: findIdForm.email,
  });

export const findPasswordPost = (findPasswordForm: IFindPasswordForm) =>
  baseApi.post(FIND_PASSWORD_URI, {
    userId: findPasswordForm.id,
    userEmail: findPasswordForm.email,
  });

export const getLoggedInInfo = () => baseApi.get(`isLogin`);

export const postLogout = () => baseApi.post(`auth/logout`, {});
