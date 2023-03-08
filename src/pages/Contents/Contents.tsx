import MainHeader from "../../components/main/MainHeader";
import { ContentsWrapper } from "../../styles/ContentsStyles";
import { Outlet } from "react-router-dom";
import styled from "styled-components";



function Contents() {
  return (
    <>
      <MainHeader />
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
    </>
  );
}
export default Contents;
