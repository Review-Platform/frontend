import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "./FormStyles";

const Form = styled.form`
  position: relative;
  width: calc((408 / 1920) * 100vw);
  height: calc((801 / 1080) * 100vh);
`;

const Title = styled.div`
  width: 100%;
  height: calc((51 / 801) * 100%);
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
  left: 0%;
  right: 0%;
  top: 15.11%;
  bottom: 74.91%;
`;

const IdWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 28.21%;
  bottom: 58.43%;
`;

const IdInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const PasswordWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 44.69%;
  bottom: 31.46%;
`;

const VerifyPasswordWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 59.55%;
  bottom: 34.83%;
`;

const EmailWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 71.66%;
  bottom: 14.98%;
`;

const CofirmBtn = styled.span`
  position: absolute;
  right: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  cursor: pointer;
`;

const Notice = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

const SignUpBtn = styled.button`
  width: calc((234 / 408) * 100%);
  height: calc((60 / 717) * 100%);
  position: absolute;
  left: 20.89%;
  right: 24.75%;
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
        <IdInputWrapper>
          <Input type="text" />
          <CofirmBtn>| 확인</CofirmBtn>
        </IdInputWrapper>
        <Notice>8~20자의 영문 대/소문자, 숫자, 특수문자로 설정해주세요.</Notice>
      </IdWrapper>
      <PasswordWrapper>
        <Label>비밀번호</Label>
        <Input type="password" />
        <Notice>10글자 이하로 비밀번호를 입력해주세요.</Notice>
      </PasswordWrapper>
      <VerifyPasswordWrapper>
        <Input type="password" />
        <Notice>비밀번호를 다시 한 번 입력해주세요.</Notice>
      </VerifyPasswordWrapper>
      <EmailWrapper>
        <Label>이메일</Label>
        <Input type="email" />
        <Notice>계정을 찾으실 경우 필요한 정보입니다.</Notice>
      </EmailWrapper>
      <SignUpBtn>회원가입하기</SignUpBtn>
    </Form>
  );
}
export default SignUpForm;
