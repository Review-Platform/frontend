import styled from "styled-components";

export const Container = styled.div<{ big: boolean }>`
  width: ${(props) => (props.big ? "85px" : "61px")};
  height: 33px;
  border-radius: 20px;
  background-color: #fff1e4;
  border: 0.8px solid #f48722;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  color: var(--redColor);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
