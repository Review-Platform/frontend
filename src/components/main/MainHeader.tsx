import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Header,
  TopNav,
  BottomNav,
  ImgArea,
  LogoImg,
  NavList,
  Nav,
} from "../../styles/MainHeaderStyle";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <TopNav>
        <NavList>
          <Nav onClick={() => navigate("/login")}>로그인</Nav>
          <Nav onClick={() => navigate("/signup")}>회원가입</Nav>
        </NavList>
      </TopNav>
      <ImgArea>
        <LogoImg onClick={() => navigate("/")} />
      </ImgArea>
      <BottomNav>
        <NavList>
          <Nav onClick={() => navigate("/")}>SNACK VILLAGE</Nav>
          <Nav onClick={() => navigate("/product")}>PRODUCT</Nav>
          <Nav onClick={() => navigate("/review")}>REVIEW</Nav>
        </NavList>
      </BottomNav>
    </Header>
  );
};

export default MainHeader;
