import styled from "styled-components";
import { RateRightText } from "../main/mainSnackInfo/style";

export const ProductContainer = styled.div`
  height: 175px;
  width: 196px;
  /* margin-bottom: 5px; */
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
  padding: 5px 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProductBackgroundImage = styled.img`
  height: 113.4px;
  width: 179.2px;
`;

export const ProductImage = styled.img`
  position: absolute;
  height: 105px;
  width: 105px;
`;

export const ProductNameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39.21px;
  padding: 0 10px;
`;

export const ProductName = styled.span`
  color: white;
  font-size: 12.6px;
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
