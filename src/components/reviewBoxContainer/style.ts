import styled from "styled-components";
import { IntroImgRight } from "../main/introduction/style";

export const Container = styled.div`
  width: 808px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ReviewBoxs = styled.ul`
  width: 808px;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const ReviewBoxList = styled.li``;
export const PageBtnsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  width: auto;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PageBtn = styled.div<{ clicked: boolean }>`
  width: 11px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => (props.clicked ? "700" : "500")};
  font-size: 18px;
  line-height: 22px;
  color: var(--redColor);
  margin-right: 15px;
  cursor: pointer;
`;
