import * as S from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import SignUpForm from "../../../components/account/forms/signUpForm/SignUpForm";

function SignUp() {
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
export default SignUp;
