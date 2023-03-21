import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  width: 300px;
  height: 100%;
  font-family: "Shrikhand", sans-serif;
  font-style: italic;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #fffbf7;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: url("images/loginBg.png");
  background-size: cover;
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
