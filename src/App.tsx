import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getLoggedInInfo } from "./apis/api/accountApi";
import { ILoggedInAtom, loggedInAtom } from "./atoms/loggedInAtom";
import ScrollToTop from "./components/ScrollToTop";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const setLoggedIn = useSetRecoilState<ILoggedInAtom>(loggedInAtom);
  const { data } = useQuery(["loggedInInfo"], getLoggedInInfo, {
    onSuccess: (data) => {
      setLoggedIn(data);
    },
  });
  return (
    <Wrapper>
      <ScrollToTop />
      <Outlet />
    </Wrapper>
  );
}

export default App;
