import styled from "styled-components";

export const Container = styled.div<{ big: boolean; reviewBox: boolean }>`
  width: ${(props) =>
    props.reviewBox
      ? props.big
        ? "85px"
        : "61px"
      : props.big
      ? "60px"
      : "40px"};
  height: ${(props) => (props.reviewBox ? "33px" : "22.8px")};
  /* height: 33px; */
  border-radius: ${(props) => (props.reviewBox ? "20px" : "13.4px")};
  background-color: #fff1e4;
  border: 0.8px solid #f48722;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  color: var(--redColor);
  font-weight: 500;
  font-size: ${(props) => (props.reviewBox ? "14px" : "9px")};
  line-height: 17px;
`;
