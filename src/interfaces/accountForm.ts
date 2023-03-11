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
