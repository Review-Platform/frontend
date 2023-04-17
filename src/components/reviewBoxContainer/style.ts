import styled from "styled-components";
import { IntroImgRight } from "../main/introduction/style";

export const Container = styled.div`
  width: 808px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const SortOrderConatiner = styled.div`
  width: 808px;
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
  color: var(--redColor);
  font-size: 16px;
  line-height: 19px;
`;
export const SortOrderItem = styled.div<{ selected: boolean }>`
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  &:first-child {
    margin-right: 5px;
  }
  &:last-child {
    margin-left: 5px;
  }
  cursor: pointer;
  margin-bottom: 14px;
`;

export const ReviewBoxsHorizontal = styled.ul`
  width: 808px;
  height: 1400px;
  display: flex;
  flex-direction: column;
`;
export const ReviewBoxsVertical = styled.ul`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  margin-bottom: 20px;
`;
export const ReviewBoxList = styled.li`
  display: flex;
  justify-content: center;
`;
export const PageBtnsContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: center;
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
