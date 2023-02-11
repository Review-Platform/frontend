import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 600px;
`;

export const Grid = styled.div`
  display: flex;
  width: 100vw;
  height: calc((1000 / 1080) * 100%);
`;

export const FormContainer = styled.div`
  width: calc((582 / 1920) * 100vw);
  margin-left: calc((15 / 1920) * 100vw);
  height: 100%;
  min-width: 400px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Label = styled.label`
  margin: 5px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  margin-left: 10px;
`;
