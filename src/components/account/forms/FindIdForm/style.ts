import styled from "styled-components";
export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  width: calc((408.5 / 1920) * 100vw);
  height: calc((416 / 1080) * 100vh);
  min-width: 300px;
  min-height: 350px;
`;
export const Title = styled.div`
  width: 100%;
  height: calc((51 / 717) * 100%);
  font-weight: 700;
  font-size: 40px;
  line-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IdWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 29.09%;
  bottom: 51.68%;
`;

export const EmailWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.33%;
  bottom: 26.44%;
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  height: calc((60 / 416) * 100%);
  position: absolute;
  left: 0%;
  right: 0%;
  top: 85.58%;
  bottom: 0%;
  background: #000000;
  border-radius: 40px;
  color: white;
  cursor: pointer;
`;

export const SubmitFail = styled.div`
  position: absolute;
  left: 10px;
  top: 74.33%;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #ff5c00;
`;

export const Label = styled.label`
  margin: 5px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  margin-left: 10px;
`;

export const Input = styled.input`
  width: calc((408 / 408.5) * 100%);
  height: calc((45 / 1080) * 100vh);
  min-height: 25px;
  border: 2px solid black;
  border-radius: 40px;
  padding: 0 7%;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
