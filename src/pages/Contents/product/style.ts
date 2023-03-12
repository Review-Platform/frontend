import styled from "styled-components";

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

export const FilterArea = styled.div`
  display: flex;
  height: 60%;
`;
export const Filter = styled.div`
  width: 45%;
  margin: 5vh 4vw;
`;
export const FilterTitle = styled.span`
  color: #e76100;
  display: block;
  border-bottom: 2px solid #f48722;
  padding-bottom: 8px;
  font-weight: bold;
  font-size: 2.1vw;
`;
export const TasteFilter = styled(Filter)`
  width: 35%;
`;
export const ProductArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2vh 0 2vh 4vw;
  /* padding: 2vh 4vw; */
`;
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
  width: 30vw;
  margin-bottom: 20px;
`;

export const RoutineText = styled.span``;
export const SearchFilterArea = styled.div`
  background-color: white;
  height: 32vh;
  width: 92vw;
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
