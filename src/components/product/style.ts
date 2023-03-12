import styled from "styled-components";
import { RateRightText } from "../main/mainSnackInfo/style";

export const ProductContainer = styled.div`
  height: 45vh;
  width: 20vw;
  margin-right: 4vw;
  margin-bottom: 10vh;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffb001;
  border-radius: 5px;
  height: 85%;
  width: 100%;
  margin-bottom: 10px;
`;

export const ProductImageArea = styled.div`
  height: 85%;
  padding: 8px 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProductBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled.img`
  position: absolute;
  height: 90%;
  width: 90%;
`;

export const ProductNameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  padding: 0 10px;
`;

export const ProductName = styled.span`
  color: white;
  font-size: 1.3vw;
  font-weight: bold;
  cursor: pointer;
`;

export const ProductRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  /* padding: 10px 0; */
  height: 15%;
  width: 100%;
  border: 2px solid #f48722;
`;

export const RateImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const RateText = styled(RateRightText)`
  color: #f48722;
`;
