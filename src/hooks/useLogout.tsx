import { postLogout, getLoggedInInfo } from "../api/accountApi";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(postLogout, {
    onSuccess: () => queryClient.invalidateQueries(["loggedInInfo"]),
  });
  const handleLogout = async () => {
    await mutateAsync();
  };
  return { handleLogout };
}
export default useLogout;
