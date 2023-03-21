import * as S from "./style";
import { useForm } from "react-hook-form";
import { IFindIdForm } from "../../../../interfaces/accountForm";
import { useNavigate } from "react-router-dom";
import { findIdPost } from "../../../../apis/api/accountApi";
import { useState } from "react";

function FindIdForm() {
  const navigate = useNavigate();
  const [submitFail, setSubmitFail] = useState(false);
  const [foundId, setFoundId] = useState("");
  const { register, handleSubmit } = useForm<IFindIdForm>();
  const onValid = async ({ name, email }: IFindIdForm) => {
    //아이디를 찾고, 찾은 아이디를 navigate에서 state로 다음 넘겨줘야한다.
    //...아이디 찾아오는 코드
    try {
      await findIdPost({ name, email }).then((res) => {
        console.log(res.data);
        navigate("success", {
          state: {
            name,
            id: res.data,
          },
        });
      });
    } catch (error) {
      setSubmitFail(true);
    }
  };
  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.Title>아이디 찾기</S.Title>
        <S.IdWrapper>
          <S.Label>이름을 입력해주세요.</S.Label>
          <S.Input {...register("name", { required: true })} />
        </S.IdWrapper>
        <S.EmailWrapper>
          <S.Label>이메일을 입력해주세요.</S.Label>
          <S.Input {...register("email", { required: true })} />
        </S.EmailWrapper>
        {submitFail ? (
          <S.SubmitFail> 이름 또는 이메일이 올바르지 않습니다.</S.SubmitFail>
        ) : (
          <S.SubmitFail></S.SubmitFail>
        )}
        <S.ConfirmBtn>확인</S.ConfirmBtn>
      </S.Form>
    </S.FormContainer>
    // <S.Form onSubmit={handleSubmit(onValid)}>
    //

    // </S.Form>
  );
}
export default FindIdForm;
