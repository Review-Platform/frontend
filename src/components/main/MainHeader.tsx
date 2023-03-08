import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";
import useLogout from "../../hooks/useLogout";

const Header = styled.header`
  width: 1200px;
  background-color: white;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`;

const BottomNav = styled.div`
  margin: 80px 0 10px 0;
`;

const ImgArea = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 230px;
  height: 110.82px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 30px;
`;

const TopNavItem = styled.li`
  color: var(--textColor);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 50px;
  cursor: pointer;
`;

const BottomNavItem = styled.li`
  color: var(--textColor);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 80px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`;

const MainHeader = () => {
  const navigate = useNavigate();
  const loggedIn = useRecoilValue<ILoggedInAtom>(loggedInAtom);
  const { handleLogout } = useLogout();
  const handleLogoutClick = () => {
    handleLogout();
  };
  return (
    <Header>
      <TopNav>
        {loggedIn.loggedIn ? (
          <NavList>
            <TopNavItem>{loggedIn.id}님</TopNavItem>
            <TopNavItem onClick={handleLogoutClick}>로그아웃</TopNavItem>
          </NavList>
        ) : (
          <NavList>
            <TopNavItem onClick={() => navigate("/login")}>로그인</TopNavItem>
            <TopNavItem onClick={() => navigate("/signup")}>
              회원가입
            </TopNavItem>
          </NavList>
        )}
      </TopNav>
      <ImgArea>
        <LogoImg
          src="/images/logo/mainLogo.png"
          onClick={() => navigate("/")}
        />
      </ImgArea>
      <BottomNav>
        <NavList>
          <BottomNavItem onClick={() => navigate("/")}>
            SNACK VILLAGE
          </BottomNavItem>
          <BottomNavItem onClick={() => navigate("/product")}>
            PRODUCT
          </BottomNavItem>
          <BottomNavItem onClick={() => navigate("/review")}>
            REVIEW
          </BottomNavItem>
          <BottomNavItem>RECORD</BottomNavItem>
        </NavList>
      </BottomNav>
    </Header>
  );
};

export default MainHeader;
