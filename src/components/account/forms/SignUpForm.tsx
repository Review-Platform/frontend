import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label } from "../AccountStyles";
import axios from "axios";
import { useEffect, useState } from "react";
import { ISignupForm } from "../../../interfaces/accountForm";
import { idCheckPost, signupPost } from "../../../apis/api/accountApi";
import { getValue } from "@testing-library/user-event/dist/utils";
import { sign } from "crypto";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

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

function SignUpForm() {
  const navigate = useNavigate();
  const [idChecked, setIdChecked] = useState(false);
  const [validId, setValidId] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [signupForm, setSignupForm] = useState<ISignupForm>({
    name: "",
    id: "",
    password: "",
    email: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
    getValues,
    trigger,
  } = useForm<ISignupForm>({
    defaultValues: signupForm,
  });

  const handleIdCheck = async () => {
    const id = getValues("id");
    setIdChecked(true);
    try {
      await idCheckPost(id).then((res) => {
        console.log(res.data);
      });
      setValidId(true);
      setIdChecked(true);
    } catch (error) {
      setValidId(false);
      setIdChecked(true);
      console.log(error);
    }
  };

  const onValid = async (data: ISignupForm) => {
    console.log("!");
    if (data.password !== data.verifyPassword) {
      setError("verifyPassword", { message: "??????????????? ???????????? ????????????." });
    } else {
      try {
        await signupPost({
          name: data.name,
          id: data.id,
          password: data.password,
          email: data.email,
        }).then(() => navigate("/"));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Title>????????????</Title>
      <NameWrapper>
        <Label>??????</Label>
        <Input
          {...register("name", {
            required: "????????? ??????????????????.",
            pattern: {
              value: /^[???-???a-zA-Z]+$/,
              message: "???????????? ?????? ?????? ???????????????.",
            },
          })}
          type="text"
        />
        {dirtyFields.name ? (
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        ) : null}
      </NameWrapper>
      <IdWrapper>
        <Label>?????????</Label>
        <IdInputWrapper>
          <Input
            {...register("id", {
              required: "???????????? ??????????????????.",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()?_~]{8,20}$/,
                message: "????????? ?????? ?????? ??????????????????.",
              },
              onChange: (e) => {
                setIdChecked(false);
                trigger("id");
              },
              validate: (v) => idChecked === true,
            })}
            type="text"
          />
          <CofirmBtn onClick={handleIdCheck}>| ??????</CofirmBtn>
        </IdInputWrapper>
        {dirtyFields.id ? (
          errors?.id?.message ? (
            <ErrorMessage>{errors.id?.message}</ErrorMessage>
          ) : idChecked ? (
            validId ? (
              <CheckedMessage>??????????????? ??????????????????.</CheckedMessage>
            ) : (
              <ErrorMessage>???????????? ??????????????????.</ErrorMessage>
            )
          ) : (
            <ErrorMessage>???????????? ????????????.</ErrorMessage>
          )
        ) : (
          <Notice>
            8~20?????? ?????? ???/?????????, ??????, ??????????????? ??????????????????.
          </Notice>
        )}
      </IdWrapper>
      <PasswordWrapper>
        <Label>????????????</Label>
        <Input
          {...register("password", {
            required: "??????????????? ??????????????????.",
            minLength: {
              value: 10,
              message: "10?????? ???????????????. ",
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
          <Notice>10?????? ?????? ??????????????????.</Notice>
        )}
      </PasswordWrapper>
      <VerifyPasswordWrapper>
        <Input
          {...register("verifyPassword", {
            required: "??????????????? ?????? ??????????????????.",
            minLength: {
              value: 10,
              message: "10?????? ???????????????. ",
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
          <Notice>??????????????? ?????? ??? ??? ??????????????????.</Notice>
        )}
      </VerifyPasswordWrapper>
      <EmailWrapper>
        <Label>?????????</Label>
        <Input
          {...register("email", {
            required: "???????????? ??????????????????.",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "???????????? ?????? ????????? ???????????????.",
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
          <Notice>????????? ????????? ?????? ????????? ???????????????.</Notice>
        )}
      </EmailWrapper>
      <SignUpBtn>??????????????????</SignUpBtn>
    </Form>
  );
}

export default SignUpForm;
