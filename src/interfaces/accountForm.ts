export interface ILoginForm {
  id: string;
  password?: string;
  remember?: boolean;
}
export interface ISignupForm extends ILoginForm {
  name: string;
  verifyPassword?: string;
  email: string;
}
export interface IFindIdForm {
  name: string;
  email: string;
}
export interface IFindPasswordForm {
  id: string;
  email: string;
}

export interface IChangePasswordForm {
  originalPassword: string;
  newPassword: string;
  verifyPassword: string;
}

export interface IChangeUserInfoForm {
  image: FileList;
  nickname: string;
}

export interface IChangePasswordProps {
  originalPassword: string;
  newPassword: string;
}
