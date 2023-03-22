import * as S from "./style";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ILoginForm } from "../../../../interfaces/accountForm";
import { useState } from "react";
import useLogin from "../../../../hooks/useLogin";

function LoginForm() {
  const navigate = useNavigate();
  const [submitFail, setSubmitFail] = useState(false);
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { handleLogin } = useLogin();
  const onValid = async (loginForm: ILoginForm) => {
    const success = await handleLogin(loginForm);
    if (success) {
      navigate(-1);
    } else {
      setSubmitFail(true);
    }
  };
  return (
    <S.FormContainer onSubmit={handleSubmit(onValid)}>
      <S.Form>
        <S.Logo src={require("../../../../imgs/logo/mainLogo.png")} />
        <S.IdWrapper>
          <S.Label htmlFor="id">아이디</S.Label>
          <S.Input {...register("id", { required: true })} type="text" />
        </S.IdWrapper>
        <S.PasswordWrapper>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input
            {...register("password", { required: true })}
            type="password"
          />
        </S.PasswordWrapper>
        {submitFail ? (
          <S.SubmitFail>
            가입되지 않은 계정이거나, 아이디 또는 비밀번호가 옳지 않습니다.
          </S.SubmitFail>
        ) : (
          <S.SubmitFail></S.SubmitFail>
        )}
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.Options>
          <S.Remember>
            <input {...register("remember")} type="checkbox" />{" "}
            <span>로그인 유지하기</span>
          </S.Remember>
          <S.FindIdPassword>
            <S.FindId>
              <Link to="find-id">아이디</Link>
            </S.FindId>{" "}
            /{" "}
            <S.FindPassword
              onClick={() => {
                navigate("find-password");
              }}
            >
              비밀번호 찾기
            </S.FindPassword>
            {` >`}
          </S.FindIdPassword>
        </S.Options>
        <S.RegisterDiv>
          <span>아직 회원이 아니라면?</span>
          <S.Register
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입하기
          </S.Register>
        </S.RegisterDiv>
        <S.SocialBtns>
          <img src={require("../../../../imgs/loginPage/google.png")} />
          <a href="https://nid.naver.com/oauth2.0/authorize">
            <img src={require("../../../../imgs/loginPage/naver.png")} />
          </a>
          <a href="https://kauth.kakao.com/oauth/authorize?client_id=0aa76e713adf2bcf4610c81e32723493&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code">
            <img src={require("../../../../imgs/loginPage/kakao.png")} />
          </a>
        </S.SocialBtns>
      </S.Form>
      {/* 

  

    

   */}
    </S.FormContainer>
  );
}
export default LoginForm;
