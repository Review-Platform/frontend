import { Outlet } from "react-router-dom";
import * as S from "./style";

function Login() {
  return (
    <S.PageWrapper>
      <S.HeaderWrapper>
        <S.SnackVillage>Snack Village</S.SnackVillage>
      </S.HeaderWrapper>
      <S.MainWrapper>
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
