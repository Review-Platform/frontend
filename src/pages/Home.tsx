import styled from "styled-components";
import MainHeader from "../components/main/MainHeader";
import { useEffect, useState } from "react";
import { getLoggedInInfo } from "../api/accountApi";
import useLoggedIn from "../hooks/useLoggedIn";
import { useRecoilState } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../atoms/loggedInAtom";
import Introduction from "../components/main/Introduction";
import Routine from "../components/main/Routine";
import Record from "../components/main/Record";
import Footer from "../components/main/Footer";

function Home() {
  return (
    <>
      <MainHeader />
      <Introduction />
      <Routine />
      <Record />
      <Footer />
    </>
  );
}
export default Home;
