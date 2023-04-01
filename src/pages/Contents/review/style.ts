import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Banner = styled.img`
  margin-top: 50px;
  width: 840px;
  height: 140px;
`;
export const Title = styled.div`
  color: #ffd600;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  text-shadow: -1px 0px #ff4a00, 0px 1px #ff4a00, 1px 0px #ff4a00,
    0px -1px #ff4a00;
  width: 840px;
  margin-top: 40px;
`;
export const SortOrderConatiner = styled.div`
  width: 808px;
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
  color: var(--redColor);
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
export const SortOrderItem = styled.div`
  &:first-child {
    margin-right: 5px;
  }
  &:last-child {
    margin-left: 5px;
  }
  cursor: pointer;
  margin-bottom: 14px;
`;
