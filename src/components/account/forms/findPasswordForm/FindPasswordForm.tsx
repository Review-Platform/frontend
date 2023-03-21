import * as S from "./style";
import { useForm } from "react-hook-form";
import { IFindPasswordForm } from "../../../../interfaces/accountForm";
import { findPasswordPost } from "../../../../apis/api/accountApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <S.FormContainer>

    <S.Form onSubmit={handleSubmit(onValid)}>
      <S.Title>비밀번호 찾기</S.Title>
      <S.IdWrapper>
        <S.Label>아이디를 입력해주세요.</S.Label>
        <S.Input {...register("id", { required: true })} />
      </S.IdWrapper>
      <S.EmailWrapper>
        <S.Label>이메일을 입력해주세요.</S.Label>
        <S.Input {...register("email", { required: true })} />
      </S.EmailWrapper>
      {submitFail ? (
        <S.SubmitFail>아이디 또는 이메일이 올바르지 않습니다.</S.SubmitFail>
        ) : null}

      <S.ConfirmBtn>확인</S.ConfirmBtn>
    </S.Form>
        </S.FormContainer>
  );
}
export default FindPasswordForm;
