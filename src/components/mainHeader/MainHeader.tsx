import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";
import useLogout from "../../hooks/useLogout";

const MainHeader = () => {
  const navigate = useNavigate();
  const loggedIn = useRecoilValue<ILoggedInAtom>(loggedInAtom);
  const { handleLogout } = useLogout();
  const handleLogoutClick = () => {
    handleLogout();
  };
  return (
    <S.Header>
      <S.TopNav>
        {loggedIn.loggedIn ? (
          <S.NavList>
            <S.TopNavItem>{loggedIn.id}님</S.TopNavItem>
            <S.TopNavItem onClick={handleLogoutClick}>로그아웃</S.TopNavItem>
          </S.NavList>
        ) : (
          <S.NavList>
            <S.TopNavItem onClick={() => navigate("/login")}>
              로그인
            </S.TopNavItem>
            <S.TopNavItem onClick={() => navigate("/signup")}>
              회원가입
            </S.TopNavItem>
          </S.NavList>
        )}
      </S.TopNav>
      <S.ImgArea>
        <S.LogoImg
          src={require("../../imgs/logo/mainLogo.png")}
          onClick={() => navigate("/")}
        />
      </S.ImgArea>
      <S.BottomNav>
        <S.BottomNavList>
          <S.BottomNavItem onClick={() => navigate("/")}>
            SNACK VILLAGE
          </S.BottomNavItem>
          <S.BottomNavItem onClick={() => navigate("/product")}>
            PRODUCT
          </S.BottomNavItem>
          <S.BottomNavItem onClick={() => navigate("/review")}>
            REVIEW
          </S.BottomNavItem>
          <S.BottomNavItem>RECORD</S.BottomNavItem>
        </S.BottomNavList>
      </S.BottomNav>
    </S.Header>
  );
};

export default MainHeader;
