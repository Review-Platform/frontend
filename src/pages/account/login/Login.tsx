import { Outlet } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleHeaderClick = () => navigate("/");
  return (
    <S.PageWrapper>
      <S.HeaderWrapper>
        <S.SnackVillage onClick={handleHeaderClick}>
          Snack Village
        </S.SnackVillage>
      </S.HeaderWrapper>
      <S.MainWrapper>
        <S.Bg src={require("../../../imgs/loginPage/loginBg.png")} />
        <S.MainLeft>
          <S.AnywayImg src={require("../../../imgs/loginPage/anyway.png")} />
        </S.MainLeft>
        <S.MainRight> 
          <Outlet />
        </S.MainRight>
      </S.MainWrapper>
    </S.PageWrapper>
  );
}
export default Login;
