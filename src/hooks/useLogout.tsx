import { postLogout, getLoggedInInfo } from "../api/accountApi";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postLogout, {
    onSuccess: () => queryClient.invalidateQueries(["loggedInInfo"]),
  });
  const handleLogout = () => {
    mutate();
  };
  return { handleLogout };
}
export default useLogout;
