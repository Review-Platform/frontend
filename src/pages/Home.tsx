import styled from "styled-components";
import MainHeader from "../components/main/MainHeader";
import { useEffect, useState } from "react";
import { getLoggedInInfo } from "../api/accountApi";
import useLoggedIn from "../hooks/useLoggedIn";
import { useRecoilState } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../atoms/loggedInAtom";
import Introduction from "../components/main/Introduction";
import Routine from "../components/main/Routine";

const IntroArea = styled.div`
  display: flex;
  background-color: #ffefdf;
  border-top: 2px solid #ff8a3b;
  height: 340px;
  width: 100vw;
`;

const IntroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  width: 60%;
`;

const IntroImgArea = styled.div`
  display: flex;
  width: 40%;
`;

const IntroImgLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const IntroImgRight = styled.img.attrs({
  src: require("../imgs/Artboard14.png"),
})`
  height: 100%;
  width: 50%;
`;

const IntroImg = styled.img`
  height: 50%;
`;

const TextLogo = styled.img.attrs({
  src: require("../imgs/TextLogo.png"),
})`
  margin-bottom: 15px;
  height: 40px;
  width: 270px;
`;

const IntroTextTop = styled.span`
  color: #ff8a3b;
`;

const IntroText = styled.span`
  margin: 8px 0;
`;

function Home() {
  return (
    <>
      <MainHeader />
      <Introduction />
      <Routine />
    </>
  );
}
export default Home;
