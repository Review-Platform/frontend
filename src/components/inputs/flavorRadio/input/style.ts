import styled from "styled-components";
export const Inputs = styled.div`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: relative;
`;
export const Label = styled.label`
  z-index: 100;
`;
export const Circle = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.2px solid var(--subColor);
  background-color: ${(props) => (props.checked ? "var(--subColor)" : null)};
  cursor: pointer;
`;
export const Input = styled.input`
  display: none;
`;
export const Line = styled.div`
  width: 74px;
  height: 0;
  color: var(--subColor);
  border: 1.21729px solid;
`;
