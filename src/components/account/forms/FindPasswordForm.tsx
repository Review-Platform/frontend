import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../../styles/AccountStyles";
import { IFindPasswordForm } from "../../../interfaces/form";
import { findPasswordPost } from "../../../apis/api/accountApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((468 / 1080) * 100vh);
  min-width: 300px;
  min-height: 350px;
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

const SubmitFail = styled.div`
  position: absolute;
  left: 10px;
  top: 74.44%;
  bottom: 23.5%;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #ff5c00;
`;

function FindPasswordForm() {
  const navigate = useNavigate();
  const [submitFail, setSubmitFail] = useState(false);
  const { register, handleSubmit } = useForm<IFindPasswordForm>();
  const onValid = async ({ id, email }: IFindPasswordForm) => {
    try {
      await findPasswordPost({ id, email });
      if (
        window.confirm(
          "임시 비밀번호가 이메일로 전송되었습니다. 이메일을 확인해주세요."
        )
      ) {
        navigate("/");
      }
    } catch (error) {
      setSubmitFail(true);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Title>비밀번호 찾기</Title>
      <IdWrapper>
        <Label>아이디를 입력해주세요.</Label>
        <Input {...register("id", { required: true })} />
      </IdWrapper>
      <EmailWrapper>
        <Label>이메일을 입력해주세요.</Label>
        <Input {...register("email", { required: true })} />
      </EmailWrapper>
      {submitFail ? (
        <SubmitFail>아이디 또는 이메일이 올바르지 않습니다.</SubmitFail>
      ) : null}

      <ConfirmBtn>확인</ConfirmBtn>
    </Form>
  );
}
export default FindPasswordForm;
