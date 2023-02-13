import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../styles/FormStyles";

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((416 / 1080) * 100vh);
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
  left: 0%;
  right: 0%;
  top: 29.09%;
  bottom: 51.68%;
`;

const EmailWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.33%;
  bottom: 26.44%;
`;

const ConfirmBtn = styled.button`
  width: 100%;
  height: calc((60 / 416) * 100%);
  position: absolute;
  left: 0%;
  right: 0%;
  top: 85.58%;
  bottom: 0%;
  background: #000000;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

function FindIdForm() {
  return (
    <Form>
      <Title>아이디 찾기</Title>
      <IdWrapper>
        <Label htmlFor="id">이름을 입력해주세요.</Label>
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
export default FindIdForm;
