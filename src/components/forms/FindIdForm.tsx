import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "./FormStyles";

const Form = styled.form`
  position: relative;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((567 / 1080) * 100vh);
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

function FindIdForm() {
  return (
    <Form>
      <IdWrapper>
        <Label htmlFor="id">이름을 입력해주세요.</Label>
        <Input name="id" type="text" />
      </IdWrapper>
      <PasswordWrapper>
        <Label htmlFor="password">이메일을 입력해주세요.</Label>
        <Input name="password" type="email" />
      </PasswordWrapper>
      <LoginBtn>확인</LoginBtn>
    </Form>
  );
}
export default FindIdForm;
