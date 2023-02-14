import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../../styles/AccountStyles";

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((468 / 1080) * 100vh);
  min-width: 300px;
  min-height: 500px;
`;
const Title = styled.div`
  width: 100%;
  height: calc((51 / 717) * 100%);
  font-weight: 700;
  font-size: 40px;
  line-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IdWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0%;
  right: 0%;
  top: 25.43%;
  bottom: 51.71%;
`;

const EmailWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 53.63%;
  bottom: 23.5%;
`;

const ConfirmBtn = styled.button`
  width: 100%;
  height: calc((60 / 468) * 100%);
  position: absolute;
  left: 0%;
  right: 0%;
  top: 87.18%;
  bottom: 0%;
  background: #000000;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

function FindPasswordForm() {
  return (
    <Form>
      <Title>비밀번호 찾기</Title>
      <IdWrapper>
        <Label htmlFor="id">아이디를 입력해주세요.</Label>
        <Input name="id" type="text" />
      </IdWrapper>
      <EmailWrapper>
        <Label htmlFor="password">이메일을 입력해주세요.</Label>
        <Input name="password" type="email" />
      </EmailWrapper>
      <ConfirmBtn>확인</ConfirmBtn>
    </Form>
  );
}
export default FindPasswordForm;
