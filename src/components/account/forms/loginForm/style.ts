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
  height: 50px;
  margin-top: 40px;
  background: var(--orangeColor);
  border-radius: 40px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;
  border-color: var(--orangeColor);
  cursor: pointer;
`;

export const Remember = styled.div`
  width: calc((141 / 408.5) * 100%);
  height: calc((23 / 567) * 100%);
  position: absolute;
  left: 2.69%;
  right: 62.79%;
  top: 77.78%;
  bottom: 18.17%;
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
  }
`;

export const FindIdPassword = styled.div`
  width: calc((167.5 / 408.5) * 100%);
  height: calc((25 / 567) * 100%);
  max-width: 130px;
  position: absolute;
  right: 3%;
  top: 77.78%;
  bottom: 17.81%;
  font-weight: 400;
  line-height: 23px;
  font-size: 12px;
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
  width: calc((320 / 408.5) * 100%);
  height: calc((23 / 567) * 100%);
  position: absolute;
  left: 20.77%;
  right: 10.89%;
  top: 95.94%;
  bottom: 0%;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
  }
`;
export const Register = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 8px;
`;

export const SubmitFail = styled.div`
  position: absolute;
  left: 10px;
  top: 54.95%;
  bottom: 42.78%;
  font-size: 13px;
  font-weight: 400;
  color: #ff5c00;
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
