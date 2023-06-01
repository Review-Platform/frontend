import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style";
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
import { ILoggedInAtom } from "../../../atoms/loggedInAtom";

const ModifyInfo = () => {
  //기본정보 수정
  const { register, handleSubmit, watch, setValue } =
    useForm<IChangeUserInfoForm>();

  //비밀번호 수정
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: formState2,
    watch: watch2,
  } = useForm<IChangePasswordForm>();

  //현재 로그인 정보 가져오기
  const { data: loggedInData } = useQuery<ILoggedInAtom>(
    ["loggedInInfo"],
    getLoggedInInfo,
    {
      onSuccess: (data) => {
        setValue("nickname", data.nickname);
      },
    }
  );

  //비밀번호 변경 요청
  const { mutate: changePasswordMutate } = useMutation(
    "changePassword",
    changePassword,
    {
      onSuccess: (res) => {
        alert("비밀번호 변경 완료");
      },
      onError: (res) => alert("기존 비밀번호가 일치하지 않습니다"),
    }
  );

  //프로필 이미지 미리보기
  const [imagePreview, setImagePreview] = useState("");
  const image = watch("image");

  //비밀번호 변경 에러 메시지
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [errorMsgTwo, setErrorMsgTwo] = useState<string | undefined>("");

  // 변경 확인 모달창 열림 state
  const [open, setOpen] = useState(false);

  //이미지 삭제 클릭
  const handleDeletePreviewFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setImagePreview("/images/default.png");
  };

  //기본정보 수정 폼 전송
  const onValidChangeUserInfo = async (data: IChangeUserInfoForm) => {
    // 회원정보 수정 API 호출 파트
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
      const response = await changeUserInfo(formData, data.nickname);
    } catch (e) {
      console.log(e);
    }
  };

  //비밀번호 변경 폼 전송
  const onValidChangePassword = (data: IChangePasswordForm) => {
    console.log("Valid password !");
    console.log(data);
    changePasswordMutate({
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
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <S.ModifyInfoContainer>
      <S.TitleArea>
        <S.Title>기본 회원 정보</S.Title>
      </S.TitleArea>
      <S.FormArea
        encType="multipart/form-data"
        onSubmit={handleSubmit(onValidChangeUserInfo)}
      >
        <S.InfoArea>
          <S.CategoryArea>
            <S.Category>프로필 이미지</S.Category>
            <S.Image
              src={imagePreview === "" ? "/images/default.png" : imagePreview}
            />
            <S.ImageButtonArea>
              <S.ImageInputLabel htmlFor="ex_file">사진 변경</S.ImageInputLabel>
              <S.ImageInput
                {...register("image")}
                id="ex_file"
                type="file"
                accept="image/*"
              />
              <S.ImageDeleteButton onClick={handleDeletePreviewFile}>
                삭제
              </S.ImageDeleteButton>
            </S.ImageButtonArea>
          </S.CategoryArea>
          <S.CategoryArea>
            <S.Category>닉네임</S.Category>
            <S.NickInput
              defaultValue={loggedInData?.nickname}
              {...register("nickname", {
                pattern: {
                  value: /^[가-힣a-zA-Z\s]+$/,
                  message: "올바르지 않은 닉네임 형식입니다.",
                },
                required: false,
              })}
              type="text"
            ></S.NickInput>
          </S.CategoryArea>
          <S.CategoryArea>
            <S.Category>아이디</S.Category>
            <S.Text>{loggedInData?.id}</S.Text>
          </S.CategoryArea>
          <S.CategoryArea>
            <S.Category>이메일</S.Category>
            <S.Text>{loggedInData?.userEmail}</S.Text>
          </S.CategoryArea>
        </S.InfoArea>
        <S.ButtonArea>
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
