import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getLoggedInInfo } from "./api/accountApi";
import { ILoggedInAtom, loggedInAtom } from "./atoms/loggedInAtom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const [loggedIn, setLoggedIn] = useRecoilState<ILoggedInAtom>(loggedInAtom);
  useEffect(() => {
    getLoggedInInfo().then((res) => {
      res.data === ""
        ? setLoggedIn({ isLoggedIn: false, id: "" })
        : setLoggedIn({ isLoggedIn: true, id: res.data });
    });
  }, []);
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default App;
