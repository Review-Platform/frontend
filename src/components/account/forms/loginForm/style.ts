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
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 182px;
  height: 88px;
`;

export const IdWrapper = styled.div`
  width: 386px;
  height: 75px;
  margin-top: 50px;
`;

export const PasswordWrapper = styled.div`
  width: 386px;
  height: 75px;
  margin-top: 20px;
`;

export const LoginBtn = styled.button`
  width: 386px;
  min-height: 50px;
  margin-top: 30px;
  background: #e76100;
  border-radius: 40px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  border: 0;
  color: white;
  outline: none;
  cursor: pointer;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Remember = styled.div`
  width: 139px;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 9px;
  input {
    width: 20px;
    height: 20px;
  }
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FindIdPassword = styled.div`
  width: 136px;
  height: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FindId = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const FindPassword = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
export const RegisterDiv = styled.div`
  width: 219px;
  height: 23px;
  margin-top: 50px;
  gap: 10px;
  span:first-child {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const Register = styled.span`
  color: #191919;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 8px;
`;

export const SocialBtns = styled.div`
  width: 130px;
  height: 34px;
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  img {
    width: 34px;
    height: 34px;
  }
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
  width: 108px;
  height: 19px;
  margin-left: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
