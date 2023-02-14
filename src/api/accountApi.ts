import axios from "axios";
import {
  IFindIdForm,
  IFindPasswordForm,
  ILoginForm,
  ISignupForm,
} from "../interfaces/form";

const BASE_URL = "https://eb94-218-155-186-175.jp.ngrok.io";
const ID_CHECK_URL = "checkId";
const SIGNUP_URL = "signup";
const LOGIN_URL = "login";
const FIND_ID_URL = "";
const FIND_PASSWORD_URL = "";

export const idCheckPost = (id: string) =>
  axios.post(`${BASE_URL}/${ID_CHECK_URL}`, {
    userId: id,
  });

export const signupPost = (signupForm: ISignupForm) =>
  axios.post(`${BASE_URL}/auth/signup`, {
    userName: signupForm.name,
    userId: signupForm.id,
    password: signupForm.password,
    userEmail: signupForm.email,
  });

export const loginPost = (loginForm: ILoginForm) =>
  axios.post(`${BASE_URL}/auth/login`, {
    userId: loginForm.id,
    password: loginForm.password,
  });

export const findIdPost = (findIdForm: IFindIdForm) =>
  axios.post(`${BASE_URL}/${FIND_ID_URL}`, {
    //변수명 확인 후 추가 예정
  });

export const findPasswordPost = (findPasswordForm: IFindPasswordForm) =>
  axios.post(`${BASE_URL}/${FIND_PASSWORD_URL}`, {
    //변수명 확인 후 추가 예정
  });
