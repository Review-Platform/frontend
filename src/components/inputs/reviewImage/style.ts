import styled from "styled-components";

export const ReviewImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export const ImgInput = styled.input`
  display: none;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
`;
