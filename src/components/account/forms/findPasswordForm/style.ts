import styled from "styled-components";

export const FormContainer = styled.div`
  width: 500px;
  height: 100%;
  min-height: 740px;
  background-color: #fffaf5;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 386px;
  height: 570px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ff4a00;
`;
export const IdWrapper = styled.div`
  width: 386px;
  height: 75px;
  margin-top: 80px;
`;

export const EmailWrapper = styled.div`
  width: 386px;
  height: 75px;
  margin-top: 20px;
`;

export const ConfirmBtn = styled.button`
  width: 270px;
  margin-top: 50px;
  min-height: 50px;
  border: 0;
  background: #e76100;
  border-radius: 40px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export const SubmitFail = styled.div`
  width: 350px;
  height: 19px;
  font-weight: 400;
  margin-left: 16px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 19px;
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
  color: #191919;
  width: 108px;
  height: 19px;
  margin-left: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
