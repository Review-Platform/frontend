import { loginPost, rememberPost, getLoggedInInfo } from "../api/accountApi";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../atoms/loggedInAtom";
import { ILoginForm } from "../interfaces/form";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function useLogin() {
  const queryClient = useQueryClient();
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    id: "",
    password: "",
    remember: false,
  });
  const { mutateAsync } = useMutation(() => rememberPost(loginForm), {
    onSettled: () => queryClient.invalidateQueries(["loggedInInfo"]),
  });
  const handleLogin = async (loginForm: ILoginForm) => {
    setLoginForm(loginForm);
    try {
      await loginPost(loginForm);
      await mutateAsync();
      return true;
    } catch (error) {
      return false;
    }
  };
  return { handleLogin };
}
export default useLogin;
