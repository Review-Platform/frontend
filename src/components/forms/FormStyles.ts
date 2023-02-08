import styled from "styled-components";
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
