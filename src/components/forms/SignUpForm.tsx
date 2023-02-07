import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "./FormStyles";

const Form = styled.form`
  position: relative;
  width: calc((408 / 1920) * 100vw);
  height: calc((717 / 1080) * 100vh);
`;

const Title = styled.div`
  width: 100%;
  height: calc((51 / 717) * 100%);
  position: absolute;
  left: 28.43%;
  right: 28.19%;
  top: 0%;
  bottom: 9.89%;
  font-weight: 700;
  font-size: 40px;
  line-height: 520px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const NameWrapper = styled.div`
  width: 100%;
  position: absolute;
  right: 0.12%;
  left: 0;
  top: 16.88%;
  bottom: 80.47%;
`;

const IdWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0.12%;
  top: 31.52%;
  bottom: 65.83%;
  span {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const PasswordWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0.12%;
  top: 49.93%;
  bottom: 47.42%;
  span {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const EmailWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0.12%;
  top: 68.34%;
  bottom: 29.01%;
  span {
    font-size: 12px;
    margin-left: 10px;
  }
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

const FindIdPassword = styled.div`
  width: calc((167.5 / 408.5) * 100%);
  height: calc((25 / 567) * 100%);
  position: absolute;
  left: 59%;
  right: 0%;
  top: 77.78%;
  bottom: 17.81%;
  font-weight: 400;
  line-height: 23px;
  font-size: 12px;
`;
const FindId = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
const FindPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const CofirmBtn = styled.div`
  position: absolute;
  width: calc((55 / 408) * 100%);
  height: calc((20 / 717) * 100%);
  font-size: 15px;
  right: 0px;
  bottom: calc(calc((45 / 1080) * 100%) / 2);
  cursor: pointer;
  span {
    margin: 0 3px;
  }
`;

const SignUpBtn = styled.button`
  width: calc((234 / 408) * 100%);
  height: calc((60 / 717) * 100%);
  position: absolute;
  left: 20.89%;
  right: 24.75%;
  top: 91.63%;
  bottom: 0%;
  background: #000000;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

function SignUpForm() {
  return (
    <Form>
      <Title>회원가입</Title>
      <NameWrapper>
        <Label>이름</Label>
        <Input type="text" />
      </NameWrapper>
      <IdWrapper>
        <Label>아이디</Label>
        <Input type="text" />

        <span>8~20자의 영문 대/소문자, 숫자, 특수문자로 설정해주세요.</span>
      </IdWrapper>
      <PasswordWrapper>
        <Label>비밀번호</Label>
        <Input type="password" />

        <span>10글자 이하로 비밀번호를 입력해주세요.</span>
      </PasswordWrapper>
      <EmailWrapper>
        <Label>비밀번호</Label>
        <Input type="password" />

        <span>계정을 찾으실 경우 필요한 정보입니다.</span>
      </EmailWrapper>
      <SignUpBtn>회원가입하기</SignUpBtn>
    </Form>
  );
}
export default SignUpForm;
