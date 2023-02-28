import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getLoggedInInfo, postLogout } from "../api/accountApi";
import { ILoggedInAtom, loggedInAtom } from "../atoms/loggedInAtom";

const Header = styled.header`
  background-color: #e5e5e5;
  margin: 0px 10vw;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BottomNav = styled.div``;

const ImgArea = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img.attrs({
  src: require("../imgs/Logo.png"),
})`
  height: 162px;
  width: 336px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 20px;
`;

const Nav = styled.li`
  color: #ff4a00;
  font-size: 15px;
  padding: 20px 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const MainHeader = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useRecoilState<ILoggedInAtom>(loggedInAtom);
  const handleLogoutClick = async () => {
    await postLogout();
    await getLoggedInInfo().then((res) => {
      res.data === ""
        ? setLoggedIn({ isLoggedIn: false, id: "" })
        : setLoggedIn({ isLoggedIn: true, id: res.data });
    });
  };
  return (
    <Header>
      <TopNav>
        {loggedIn.isLoggedIn ? (
          <NavList>
            <Nav>{loggedIn.id}님</Nav>
            <Nav onClick={handleLogoutClick}>로그아웃</Nav>
          </NavList>
        ) : (
          <NavList>
            <Nav onClick={() => navigate("/login")}>로그인</Nav>
            <Nav onClick={() => navigate("/signup")}>회원가입</Nav>
          </NavList>
        )}
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
