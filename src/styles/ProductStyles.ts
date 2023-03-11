import styled from "styled-components";
import { RateRightText } from "./MainSnackInfoStyles";

export const RankingNavImg = styled.img`
  width: 100%;
  height: 35vh;
`;

export const RoutineArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;
  height: 37vh;
  width: 100%;
`;

export const RoutineImg = styled.img`
  height: 5vh;
  width: 32vw;
  margin-bottom: 20px;
`;

export const RoutineText = styled.span``;

export const SearchFilterArea = styled.div`
  background-color: white;
  height: 32vh;
  width: 92vw;
`;

export const FilterArea = styled.div`
  display: flex;
  height: 60%;
`;

export const Filter = styled.div`
  width: 45%;
  margin: 5vh 4vw;
`;

export const TasteFilter = styled(Filter)`
  width: 35%;
`;

export const FilterTitle = styled.span`
  color: #e76100;
  display: block;
  border-bottom: 2px solid #f48722;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 2.1vw;
`;

export const CategoryArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Category = styled.input.attrs({
  type: "checkbox",
})`
  width: 1.3vw;
  height: 1.3vw;
  cursor: pointer;
`;

export const CategoryLabel = styled.label`
  font-size: 1.3vw;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4vw;
  height: 40%;
`;

export const SearchInput = styled.input`
  height: 60%;
  width: 80%;
  border: 0;
  border-radius: 6px;
  padding-left: 15px;
  font-size: 1.3vw;
  background-color: #ffe5c7;
  ::placeholder {
    color: #ff5c00;
    font-size: 1.3vw;
  }
`;

export const SearchButton = styled.button`
  height: 60%;
  width: 10%;
  border: 0;
  border-radius: 5px;
  background-color: #e76100;
  color: white;
  margin-left: 2vw;
  font-size: 1.3vw;
`;

export const ProductArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1000px;
  width: 100%;
  padding: 5vh 4vw;
`;

export const ProductContainer = styled.div`
  height: 41vh;
  width: 20vw;
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
`;

export const ProductBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const ProductNameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

export const ProductName = styled.span`
  color: white;
  font-size: 1.4vw;
  font-weight: bold;
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
