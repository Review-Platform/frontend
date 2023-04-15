import { postLogout, getLoggedInInfo } from "../apis/api/accountApi";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postLogout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["loggedInInfo"]);
      queryClient.invalidateQueries(["record", "myBest"]);
      queryClient.invalidateQueries(["record", "myHashtags"]);
    },
  });
  const handleLogout = () => {
    mutate();
  };
  return { handleLogout };
}
export default useLogout;
