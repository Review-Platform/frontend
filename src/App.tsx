import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getLoggedInInfo } from "./api/accountApi";
import { ILoggedInAtom, loggedInAtom } from "./atoms/loggedInAtom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
