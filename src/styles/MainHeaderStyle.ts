import styled from "styled-components";

export const Header = styled.header`
  margin: 0px 10vw;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const BottomNav = styled.div`
  padding-left: 10px;
`;

export const ImgArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.img.attrs({
  src: require("../imgs/Logo.png"),
})`
  height: 162px;
  width: 336px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  margin-right: 20px;
`;

export const Nav = styled.li`
  color: #ff4a00;
  font-size: 15px;
  padding: 20px 5px;
  margin-left: 10px;
  cursor: pointer;
`;
