import styled from "styled-components";
import { ButtonProps } from "../../interfaces/hashTagButton";

export const HashTagBtn = styled.button<ButtonProps>`
  border-radius: 20px;
  height: 33px;
  /* width: 61px; */
  margin-right: 7px;
  margin-bottom: 10px;
  border: 1px solid #f48722;
  background-color: ${(props) => (props.selected ? "#fff1e4" : "#ffffff")};
  cursor: pointer;
`;

export const HashTagText = styled.span`
  color: #f48722;
  margin: 5px 7px;
  font-size: 14px;
`;
