import { useEffect, useRef, useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as S from "./style";
import { IModifyForm } from "../../../interfaces/modifyForm";
import ModalComponent from "../../../components/modal/Modal";
import {
  changePassword,
  changeUserInfo,
  getLoggedInInfo,
} from "../../../apis/api/accountApi";
import {
  IChangePasswordForm,
  IChangeUserInfoForm,
} from "../../../interfaces/accountForm";
import { useMutation, useQuery } from "react-query";

const ModifyInfo = () => {
  const { register, handleSubmit, formState, setError, watch, setValue } =
    useForm<IChangeUserInfoForm>();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: formState2,
    watch: watch2,
  } = useForm<IChangePasswordForm>();

  const { data } = useQuery(["loggedInInfo"], getLoggedInInfo, {
    onSuccess: (data) => {
      console.log(data.data);
      setValue("nickname", data.data.nickname);
    },
  });

  const { mutate } = useMutation("changeUserInfo", changeUserInfo, {
    onSuccess: (res) => {
      console.log("change success !!", res);
    },
    onError: (res) => console.log("error !!", res),
  });

  const { mutate: mutate2 } = useMutation("changePassword", changePassword, {
    onSuccess: (res) => {
      console.log("change pw success !!", res);
    },
    onError: (res) => console.log("error !", res),
  });

  const [imagePreview, setImagePreview] = useState("");
  const image = watch("image");
  const imageRef = useRef<HTMLInputElement>(null);

  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [errorMsgTwo, setErrorMsgTwo] = useState<string | undefined>("");
  const [open, setOpen] = useState(false);

  const handleDeletePreviewFile = (e: React.MouseEvent) => {
    e.preventDefault();
    // if (imageRef.current) {
    //   imageRef.current.value = "";
    //   setImagePreview(`/images/default.png`);
    // }
    setImagePreview(`/images/default.png`);
  };

  const onValidChangeUserInfo = (data: IChangeUserInfoForm) => {
    // 회원정보 수정 API 호출 파트
    console.log("Valid user info !");
    mutate({
      image: data.image,
      nickname: data.nickname,
    });
  };

  const onInValidChangeUserInfo = () => {
    console.log("Invalid change user info");
  };

  const onValidChangePassword = (data: IChangePasswordForm) => {
    console.log("Valid password !");
    console.log(data);
    mutate2({
      originalPassword: data.originalPassword,
      newPassword: data.newPassword,
    });
  };

  const onInValidChangePassword = () => {
    console.log("Invalid change password");
    if (formState2.errors.newPassword) {
      setErrorMsg(formState2.errors.newPassword.message);
    } else {
      setErrorMsg("");
    }
    if (formState2.errors.verifyPassword) {
      setErrorMsgTwo(formState2.errors.verifyPassword.message);
    } else {
      setErrorMsgTwo("");
    }
  };

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      // 브라우저의 메모리에 있는 파일의 url을 가져오기 위한 방법이 URL.createObjectURL(file)
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <S.ModifyInfoContainer>
      <S.TitleArea>
        <S.Title>기본 회원 정보</S.Title>
      </S.TitleArea>
      <S.FormArea
        onSubmit={handleSubmit(onValidChangeUserInfo, onInValidChangeUserInfo)}
      >
        <S.InfoArea>
          <S.CategoryArea>
            <S.Category>프로필 이미지</S.Category>
            {/* <S.Image src={profileImage?.toString()} /> */}
            <S.Image src={imagePreview} />
            <S.ImageButtonArea>
              <S.ImageInputLabel htmlFor="ex_file">사진 변경</S.ImageInputLabel>
              <S.ImageInput
                {...register("image")}
                id="ex_file"
                type="file"
                accept="image/*"
                // ref={imageRef}
              />
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
        <S.ButtonArea>
          {/* <S.Button onClick={() => {
            setValue("")
          }}>초기화</S.Button> */}
          <S.Button>회원정보 저장</S.Button>
        </S.ButtonArea>
      </S.FormArea>

      <S.TitleArea>
        <S.Title>비밀번호 수정</S.Title>
      </S.TitleArea>
      <S.FormArea
        onSubmit={handleSubmit2(onValidChangePassword, onInValidChangePassword)}
      >
        <S.ModifyArea>
          <S.CategoryArea>
            <S.Category>기존 비밀번호</S.Category>
            <S.PassWordInput
              {...register2("originalPassword")}
              type="password"
              placeholder="기존의 비밀번호를 입력해주세요."
            ></S.PassWordInput>
          </S.CategoryArea>
          <S.CategoryArea>
            <S.Category>새 비밀번호</S.Category>
            <S.PassWordInput
              placeholder="10글자 이상 입력해주세요."
              type="password"
              {...register2("newPassword", {
                minLength: {
                  value: 10,
                  message: "비밀번호가 10글자 미만입니다.",
                },
              })}
            ></S.PassWordInput>
            {errorMsg === "" ? null : (
              <S.ErrorMessage>{errorMsg}</S.ErrorMessage>
            )}
          </S.CategoryArea>

          <S.CategoryArea>
            <S.Category>새 비밀번호 확인</S.Category>
            <S.PassWordInput
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              type="password"
              {...register2("verifyPassword", {
                validate: (value) =>
                  value !== watch2().newPassword
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
          <S.Button>비밀번호 저장</S.Button>
        </S.ButtonArea>
      </S.FormArea>
    </S.ModifyInfoContainer>
  );
};

export default ModifyInfo;
