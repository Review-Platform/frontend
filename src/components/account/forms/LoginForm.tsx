import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../../styles/AccountStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ILoginForm } from "../../../interfaces/form";
import {
  getLoggedInInfo,
  loginPost,
  rememberPost,
} from "../../../api/accountApi";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { loggedInAtom } from "../../../atoms/loggedInAtom";

const Form = styled.form`
  position: relative;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((567 / 1080) * 100vh);
  min-width: 300px;
  min-height: 500px;
`;

const IdWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0.12%;
  top: 21.34%;
  bottom: 64.55%;
`;

const PasswordWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0.12%;
  top: 39.86%;
  bottom: 46.03%;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: calc((60 / 587) * 100%);
  position: absolute;
  left: 0%;
  right: 0.12%;
  top: 62.79%;
  bottom: 26.63%;
  background: #000000;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

const Remember = styled.div`
  width: calc((141 / 408.5) * 100%);
  height: calc((23 / 567) * 100%);
  position: absolute;
  left: 2.69%;
  right: 62.79%;
  top: 77.78%;
  bottom: 18.17%;
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
  }
`;

const FindIdPassword = styled.div`
  width: calc((167.5 / 408.5) * 100%);
  height: calc((25 / 567) * 100%);
  max-width: 130px;
  position: absolute;
  right: 3%;
  top: 77.78%;
  bottom: 17.81%;
  font-weight: 400;
  line-height: 23px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FindId = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
const FindPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
const RegisterDiv = styled.div`
  width: calc((320 / 408.5) * 100%);
  height: calc((23 / 567) * 100%);
  position: absolute;
  left: 20.77%;
  right: 10.89%;
  top: 95.94%;
  bottom: 0%;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
  }
`;
const Register = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 8px;
`;

const SubmitFail = styled.div`
  position: absolute;
  left: 10px;
  top: 54.95%;
  bottom: 42.78%;
  font-size: 13px;
  font-weight: 400;
  color: #ff5c00;
`;

function LoginForm() {
  const navigate = useNavigate();
  const setLoggedIn = useSetRecoilState(loggedInAtom);
  const [submitFail, setSubmitFail] = useState(false);
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onValid = async ({ id, password, remember }: ILoginForm) => {
    try {
      await loginPost({ id, password });
      await rememberPost({ remember, id });
      await getLoggedInInfo().then((res) => {
        res.data === ""
          ? setLoggedIn({ isLoggedIn: false, id: "" })
          : setLoggedIn({ isLoggedIn: true, id: res.data });
      });
      navigate(-1);
    } catch (error) {
      setSubmitFail(true);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <IdWrapper>
        <Label htmlFor="id">아이디</Label>
        <Input {...register("id", { required: true })} type="text" />
      </IdWrapper>

      <PasswordWrapper>
        <Label htmlFor="password">비밀번호</Label>
        <Input {...register("password", { required: true })} type="password" />
      </PasswordWrapper>
      {submitFail ? (
        <SubmitFail>
          가입되지 않은 계정이거나, 아이디 또는 비밀번호가 옳지 않습니다.
        </SubmitFail>
      ) : null}
      <LoginBtn>로그인</LoginBtn>
      <Remember>
        <input {...register("remember")} type="checkbox" />{" "}
        <span>로그인 유지하기</span>
      </Remember>
      <FindIdPassword>
        <FindId>
          <Link to="find-id">아이디</Link>
        </FindId>{" "}
        /{" "}
        <FindPassword
          onClick={() => {
            navigate("find-password");
          }}
        >
          비밀번호 찾기
        </FindPassword>
        {` >`}
      </FindIdPassword>
      <RegisterDiv>
        <span>아직 회원이 아니라면?</span>
        <Register
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하기
        </Register>
      </RegisterDiv>
    </Form>
  );
}
export default LoginForm;
