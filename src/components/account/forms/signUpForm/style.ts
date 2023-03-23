import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  height: 865px;
  min-height: 740px;
  background-color: #fffaf5;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 386px;
  height: auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: #ff4a00;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

export const Notice = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 8px;
`;

export const NameWrapper = styled.div`
  width: 386px;
  height: 75px;
  margin-top: 50px;
`;

export const IdWrapper = styled.div`
  width: 386px;
  height: 102px;
  margin-top: 20px;
`;

export const IdInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CofirmBtn = styled.span`
  position: absolute;
  right: 10px;
  top: 23px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export const PasswordWrapper = styled.div`
  width: 386px;
  height: 185px;
  margin-top: 20px;
`;

export const VerifyPasswordWrapper = styled.div`
  width: 386px;
  height: 73px;
  display: flex;
  flex-direction: column;
  box-sizing: b;
`;

export const EmailWrapper = styled.div`
  width: 386px;
  height: 102px;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 10px;
  color: var(--orangeColor);
`;
export const CheckedMessage = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 10px;
  color: var(--orangeColor);
  color: purple;
`;

export const SignUpBtn = styled.button`
  width: 270px;
  height: 50px;
  margin-top: 60px;
  background-color: var(--orangeColor);
  border: none;
  border-radius: 40px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 80px;
`;

export const SubmitFail = styled.div`
  width: 350px;
  height: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-left: 16px;
  margin-top: 10px;
  color: var(--orangeColor);
`;
export const Input = styled.input`
  width: 386px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 40px;
  margin-top: 10px;
  padding-left: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  width: 108px;
  height: 19px;
  margin-left: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
