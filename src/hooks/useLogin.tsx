import { loginPost, rememberPost } from "../apis/api/accountApi";
import { ILoginForm } from "../interfaces/accountForm";
import { useMutation, useQueryClient } from "react-query";

function useLogin() {
  const queryClient = useQueryClient();
  const { mutateAsync: rememberPostMutate } = useMutation(
    (loginForm: ILoginForm) => rememberPost(loginForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["loggedInInfo"]);
        queryClient.invalidateQueries(["record", "myBest"]);
        queryClient.invalidateQueries(["record", "myHashtags"]);
      },
    }
  );
  const { mutateAsync: loginPostMutate } = useMutation(
    (loginForm: ILoginForm) => loginPost(loginForm)
  );
  const handleLogin = async (loginForm: ILoginForm) => {
    try {
      await loginPostMutate(loginForm);
      await rememberPostMutate(loginForm);
      return true;
    } catch (error) {
      return false;
    }
  };
  return { handleLogin };
}
export default useLogin;
