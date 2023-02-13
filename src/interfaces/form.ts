export interface ILoginForm {
  id: string;
  password: string;
}
export interface ISignupForm extends ILoginForm {
  name: string;
  verifyPassword?: string;
  email: string;
}
