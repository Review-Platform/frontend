import styled from "styled-components";

export const Star = styled.label``;

export const FilledStar = styled.svg<{ checked: boolean }>`
  width: 28px;
  height: 25px;
  fill: ${(props) =>
    props.checked ? "var(--yellowColor)" : "rgba(0, 0, 0, 0.3)"};
  cursor: pointer;
`;
export const StarInput = styled.input`
  display: none;
`;
