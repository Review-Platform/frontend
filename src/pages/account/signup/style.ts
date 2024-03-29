import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 925px;
  padding: 0;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--subColor);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SnackVillage = styled.div`
  width: 514px;
  height: 100%;
  font-family: "Shrikhand", sans-serif;
  font-style: italic;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffbf7;
  cursor: pointer;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: 865px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 865px;
  z-index: -1;
`;
export const MainLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 80px;
`;
export const AnywayImg = styled.img`
  width: 347px;
  height: 484px;
`;
export const MainRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
