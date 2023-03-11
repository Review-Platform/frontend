import styled from "styled-components";

export const Label = styled.label``;
export const HashtagBox = styled.div<{ big: boolean; selected: boolean }>`
  width: ${(props) => (props.big ? "85px" : "61px")};
  height: 34px;
  border: 1px solid var(--mainColor);
  background-color: ${(props) => (props.selected ? " #fff1e4" : "white")};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;
export const CheckBox = styled.input`
  display: none;
`;
