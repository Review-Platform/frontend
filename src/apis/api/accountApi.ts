import axios from "axios";
import { baseApi } from "../utils/instance";
import {
  IChangePasswordForm,
  IChangePasswordProps,
  IChangeUserInfoForm,
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
const CHANGE_PASSWORD_URI = "auth/changePassword";
const CHANGE_USER_INFO_URI = "auth/changeUserInfo";

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

export const changePassword = (changePasswordForm: IChangePasswordProps) =>
  baseApi.post(CHANGE_PASSWORD_URI, {
    originalPassword: changePasswordForm.originalPassword,
    newPassword: changePasswordForm.newPassword,
  });

// export const changeUserInfo = (changeUserInfoForm: IChangeUserInfoForm) =>
//   baseApi.post(CHANGE_USER_INFO_URI, {
//     image: changeUserInfoForm.image,
//     nickname: changeUserInfoForm.nickname,
//   });
export const changeUserInfo = (formData: FormData) =>
  baseApi.post(CHANGE_USER_INFO_URI, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
