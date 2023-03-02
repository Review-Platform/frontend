import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getLoggedInInfo } from "./api/accountApi";
import { ILoggedInAtom, loggedInAtom } from "./atoms/loggedInAtom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const setLoggedIn = useSetRecoilState<ILoggedInAtom>(loggedInAtom);
  const { data } = useQuery(["loggedInInfo"], getLoggedInInfo, {
    onSuccess: (data) => {
      console.log(data.data);
      setLoggedIn(data.data);
    },
  });
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default App;
