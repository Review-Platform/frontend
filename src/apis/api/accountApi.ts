import axios from "axios";
import { baseApi } from "../utils/instance";
import {
  IFindIdForm,
  IFindPasswordForm,
  ILoginForm,
  ISignupForm,
} from "../../interfaces/accountForm";

const ID_CHECK_URI = "auth/checkId";
const SIGNUP_URI = "auth/signup";
const LOGIN_URI = "auth/login";
const FIND_ID_URI = "findId";
const FIND_PASSWORD_URI = "sendMail";
const LOGIN_INFO_URI = "isLogin";
const LOGOUT_URI = "auth/logout";
const KAKAO_URI = "auth/authorizationCode";

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

export const getLoggedInInfo = () => baseApi.get(LOGIN_INFO_URI);

export const postLogout = () => baseApi.post(LOGOUT_URI, {});

export const kakaoLogin = (authorizationCode: string) =>
  baseApi.get(KAKAO_URI, {
    params: { authorizationCode },
  });
