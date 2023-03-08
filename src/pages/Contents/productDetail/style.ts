import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--textColor);
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 0;
  margin-top: 42px;
  margin-left: 40px;
`;

export const DetailContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1200px;
  height: 440px;
  background-color: white;
  border: 4px solid #f48722;
  border-radius: 20px;
`;

export const ImgContainer = styled.div`
  width: 460px;
  height: 310px;
  margin-left: 110px;
  background: url("/images/background/productImgBackground.png");
  background-size: cover;
  align-self: center;
`;

export const InfoContainer = styled.div`
  width: auto;
  height: 340px;
  margin-left: 30px;
  margin-top: 53px;
`;
export const InfoBrandName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--textColor);
`;
export const InfoProductName = styled.div`
  margin-top: 10px;
  color: rgba(25, 25, 25, 1);
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;
