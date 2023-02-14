import axios from "axios";
import { IFindIdForm, ILoginForm, ISignupForm } from "../interfaces/form";

export const BASE_URL = "https://eb94-218-155-186-175.jp.ngrok.io";
export const ID_CHECK_URL = "checkId";
export const SIGNUP_URL = "signup";
export const LOGIN_URL = "login";
export const FIND_ID_URL = "";

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
