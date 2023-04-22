import styled from "styled-components";
import { ContentsWrapper } from "../ContentsStyles";

export const ContentsWrapperTwo = styled(ContentsWrapper)`
  border-top: none;
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
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const CategoryLabel = styled.label`
  font-size: 16px;
`;

export const FilterArea = styled.div`
  display: flex;
  width: 414px;
  height: 66px;
`;

export const HashtagArea = styled(FilterArea)`
  height: 100%;
  width: 310px;
`;
export const Filter = styled.div`
  width: 100%;
  /* margin: 5vh 4vw; */
`;
export const FilterTitle = styled.span`
  color: #e76100;
  display: block;
  border-bottom: 2px solid #f48722;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 18px;
`;
export const TasteFilter = styled(Filter)`
  width: 35%;
`;
export const ProductArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 840px;
  padding: 20px 0 0 0;
  /* padding: 2vh 4vw; */
`;
export const RankingNavImg = styled.img`
  width: 840px;
  height: 140px;
`;

export const RoutineArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 136px;
  width: 840px;
  padding-left: 10px;
`;

export const RoutineImg = styled.img`
  height: 35px;
  width: 320px;
  margin-bottom: 20px;
`;

export const RoutineText = styled.span`
  font-size: 14px;
`;
export const SearchFilterArea = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: blue; */
  height: 150px;
  width: 840px;
`;

export const SearchArea = styled.form`
  display: flex;
  align-items: center;
  /* padding-left: 4vw; */
  height: 36px;
  width: 437px;
`;

export const SearchInput = styled.input`
  height: 36px;
  width: 333px;
  border: 0;
  border-radius: 6px;
  padding-left: 15px;
  font-size: 16px;
  background-color: #ffe5c7;
  ::placeholder {
    color: #ff5c00;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  height: 36px;
  width: 94px;
  border: 0;
  border-radius: 5px;
  background-color: #e76100;
  color: white;
  margin-left: 2vw;
  font-size: 18px;
  cursor: pointer;
`;

export const LeftArea = styled.div`
  height: 100%;
  width: 60%;
  padding: 20px;
`;

export const RightArea = styled(LeftArea)`
  width: 40%;
`;

export const HashTagButtonArea = styled.div`
  padding: 10px 0;
`;
