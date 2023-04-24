import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as S from "./style";
import { IModifyForm } from "../../../interfaces/modifyForm";
import ModalComponent from "../../../components/modal/Modal";

const ModifyInfo = () => {
  const { register, handleSubmit, formState, setError, watch } =
    useForm<IModifyForm>();
  const [profileImage, setProfileImage] = useState<
    string | ArrayBuffer | null
  >();
  const imageRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [errorMsgTwo, setErrorMsgTwo] = useState<string | undefined>("");
  const [open, setOpen] = useState(false);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      console.log(reader);

      reader.onload = () => {
        setProfileImage(reader.result);
      };
    }
  };

  const handleDeletePreviewFile = (e: React.MouseEvent) => {
    e.preventDefault();
    if (imageRef.current) {
      imageRef.current.value = "";
      setProfileImage(`/images/default.png`);
    }
  };

  const onValid = (data: IModifyForm) => {
    // 회원정보 수정 API 호출 파트
    console.log("Valid!");
  };

  const onInValid = () => {
    if (formState.errors.newPW) {
      setErrorMsg(formState.errors.newPW.message);
    } else {
      setErrorMsg("");
    }
    if (formState.errors.verifyPW) {
      setErrorMsgTwo(formState.errors.verifyPW.message);
    } else {
      setErrorMsgTwo("");
    }
  };

  return (
    <S.ModifyInfoContainer onSubmit={handleSubmit(onValid, onInValid)}>
      <S.TitleArea>
        <S.Title>기본 회원 정보</S.Title>
      </S.TitleArea>
      <S.InfoArea>
        <S.CategoryArea>
          <S.Category>프로필 이미지</S.Category>
          <S.Image src={profileImage?.toString()} />
          <S.ImageButtonArea>
            <S.ImageInputLabel htmlFor="ex_file">사진 변경</S.ImageInputLabel>
            <S.ImageInput
              ref={imageRef}
              onChange={handleChangeFile}
              id="ex_file"
              type="file"
              accept="image/*"
            ></S.ImageInput>
            <S.ImageDeleteButton onClick={handleDeletePreviewFile}>
              삭제
            </S.ImageDeleteButton>
          </S.ImageButtonArea>
        </S.CategoryArea>
        <S.CategoryArea>
          <S.Category>닉네임</S.Category>
          <S.NickInput
            {...register("nickname", {
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: "올바르지 않은 닉네임 형식입니다.",
              },
            })}
            type="text"
          ></S.NickInput>
        </S.CategoryArea>
        <S.CategoryArea>
          <S.Category>아이디</S.Category>
          <S.Text></S.Text>
        </S.CategoryArea>
        <S.CategoryArea>
          <S.Category>이메일</S.Category>
          <S.Text></S.Text>
        </S.CategoryArea>
      </S.InfoArea>
      <S.TitleArea>
        <S.Title>비밀번호 수정</S.Title>
      </S.TitleArea>
      <S.ModifyArea>
        <S.CategoryArea>
          <S.Category>기존 비밀번호</S.Category>
          <S.PassWordInput
            {...register("currentPW")}
            type="password"
            placeholder="기존의 비밀번호를 입력해주세요."
          ></S.PassWordInput>
        </S.CategoryArea>
        <S.CategoryArea>
          <S.Category>새 비밀번호</S.Category>
          <S.PassWordInput
            placeholder="10글자 이상 입력해주세요."
            type="password"
            {...register("newPW", {
              minLength: {
                value: 10,
                message: "비밀번호가 10글자 미만입니다.",
              },
            })}
          ></S.PassWordInput>
          {errorMsg === "" ? null : <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
        </S.CategoryArea>

        <S.CategoryArea>
          <S.Category>새 비밀번호 확인</S.Category>
          <S.PassWordInput
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            type="password"
            {...register("verifyPW", {
              validate: (value) =>
                value !== watch().newPW
                  ? "패스워드가 일치하지 않습니다."
                  : true,
            })}
          ></S.PassWordInput>
          {errorMsgTwo === "" ? null : (
            <S.ErrorMessage>{errorMsgTwo}</S.ErrorMessage>
          )}
        </S.CategoryArea>
      </S.ModifyArea>
      <S.ButtonArea>
        {open && (
          <ModalComponent
            open={open}
            setOpen={setOpen}
            children="정말 탈퇴하시겠습니까 ?"
          />
        )}
        <S.Button onClick={() => setOpen(true)}>회원 탈퇴</S.Button>
        <S.Button>회원정보 저장</S.Button>
      </S.ButtonArea>
    </S.ModifyInfoContainer>
  );
};

export default ModifyInfo;
