import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "./FormStyles";
import axios from "axios";
import { useEffect, useState } from "react";

const ID_CHECK_URL = "https://9f50-218-155-186-175.jp.ngrok.io/checkId";
const SIGNUP_URL = "https://9f50-218-155-186-175.jp.ngrok.io/signup";

const Form = styled.form`
  position: relative;
  width: calc((408 / 1920) * 100vw);
  height: calc((801 / 1080) * 100vh);
  min-width: 300px;
  min-height: 500px;
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
const ErrorMessage = styled.span`
  font-size: 12px;
  margin-left: 10px;
  color: tomato;
`;
const CheckedMessage = styled.span`
  font-size: 12px;
  margin-left: 10px;
  color: purple;
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

interface IForm {
  name: string;
  id: string;
  password: string;
  verifyPassword: string;
  email: string;
}

function SignUpForm() {
  const [idChecked, setIdChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
    getValues,
    watch,
    trigger,
  } = useForm<IForm>({
    defaultValues: {
      name: "",
      id: "",
      password: "",
      verifyPassword: "",
      email: "",
    },
  });
  const handleIdCheck = () => {
    const id = getValues("id");
    axios
      .post(ID_CHECK_URL, {
        userId: id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setIdChecked(true);
  };

  const onValid = (data: IForm) => {
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", { message: "비밀번호가 일치하지 않습니다." });
    } else {
      const name = getValues("name");
      const id = getValues("id");
      const password = getValues("password");
      const email = getValues("email");
      axios
        .post(SIGNUP_URL, {
          userName: name,
          userId: id,
          password,
          userEmail: email,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Title>회원가입</Title>
      <NameWrapper>
        <Label>이름</Label>
        <Input
          {...register("name", {
            required: "이름을 입력해주세요.",
            pattern: {
              value: /^[가-힣a-zA-Z]+$/,
              message: "올바르지 않은 이름 형식입니다.",
            },
          })}
          type="text"
        />
        {dirtyFields.name ? (
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        ) : null}
      </NameWrapper>
      <IdWrapper>
        <Label>아이디</Label>
        <IdInputWrapper>
          <Input
            {...register("id", {
              required: "아이디를 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()?_~]{8,20}$/,
                message: "조건에 맞게 다시 입력해주세요.",
              },
              onChange: (e) => {
                setIdChecked(false);
                trigger("id");
              },
              validate: (v) => idChecked === true,
            })}
            type="text"
          />
          <CofirmBtn onClick={handleIdCheck}>| 확인</CofirmBtn>
        </IdInputWrapper>
        {dirtyFields.id ? (
          errors?.id?.message ? (
            <ErrorMessage>{errors.id?.message}</ErrorMessage>
          ) : idChecked ? (
            <CheckedMessage>사용가능한 아이디입니다.</CheckedMessage>
          ) : (
            <ErrorMessage>중복검사 해주세요.</ErrorMessage>
          )
        ) : (
          <Notice>
            8~20자의 영문 대/소문자, 숫자, 특수문자로 설정해주세요.
          </Notice>
        )}
      </IdWrapper>
      <PasswordWrapper>
        <Label>비밀번호</Label>
        <Input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 10,
              message: "10글자 미만입니다. ",
            },
            onChange: (e) => {
              trigger("password");
            },
          })}
          type="password"
        />
        {dirtyFields.password ? (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        ) : (
          <Notice>10글자 이상 입력해주세요.</Notice>
        )}
      </PasswordWrapper>
      <VerifyPasswordWrapper>
        <Input
          {...register("verifyPassword", {
            required: "비밀번호를 다시 입력해주세요.",
            minLength: {
              value: 10,
              message: "10글자 미만입니다. ",
            },
            onChange: (e) => {
              trigger("verifyPassword");
            },
          })}
          type="password"
        />
        {dirtyFields.verifyPassword ? (
          <ErrorMessage>{errors?.verifyPassword?.message}</ErrorMessage>
        ) : (
          <Notice>비밀번호를 다시 한 번 입력해주세요.</Notice>
        )}
      </VerifyPasswordWrapper>
      <EmailWrapper>
        <Label>이메일</Label>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "올바르지 않은 이메일 형식입니다.",
            },
            onChange: (e) => {
              trigger("email");
            },
          })}
          type="text"
        />
        {dirtyFields.email ? (
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        ) : (
          <Notice>계정을 찾으실 경우 필요한 정보입니다.</Notice>
        )}
      </EmailWrapper>
      <SignUpBtn type="submit">회원가입하기</SignUpBtn>
    </Form>
  );
}
export default SignUpForm;
