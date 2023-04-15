import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingTitle = styled.div`
  width: 100%;
  padding-left: 40px;
  margin-top: 94px;
  text-align: start;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: #ff2617;
`;
export const RankingDescription = styled.div`
  width: 100%;
  margin-top: 8px;
  padding-left: 40px;
  display: flex;
  justify-content: start;
`;
export const RankingDescriptionText = styled.span`
  width: 356px;
  height: 52px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;

export const RankingContainer = styled.div`
  margin-top: 46px;
  width: 1120px;
  height: 266px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
export const Rank = styled.div`
  margin-left: 7px;
  width: 32px;
  height: 30px;
  font-weight: 700;
`;
export const RankingItemName = styled.div`
  margin-left: 20px;
  width: auto;
  height: 30px;
`;
export const RankingItemGrade = styled.div`
  position: absolute;
  right: 7px;
  display: flex;
  align-items: center;
  svg {
    margin-bottom: 2.5px;
  }
`;
export const RankingItem = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px dashed #ff2617;
  &:nth-child(2n-1) {
    border-right: 1px solid #ff2617;
    div:last-child {
      right: 58px;
    }
  }
  &:nth-child(2n) {
    padding-left: 44px;
  }
  &:nth-last-child(1),
  :nth-last-child(2) {
    border-bottom: none;
  }
  display: flex;
  align-items: center;
  position: relative;
  div {
    font-size: 16px;
    line-height: 30px;
    color: #ff2617;
  }
`;

export const RecordBox = styled.div`
  width: 44px;
  height: 19px;
  margin-top: 54px;
  width: 1200px;
  height: 1145px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  position: relative;
`;

export const RecordContainer = styled.div`
  margin-top: 111px;
  margin-left: 35px;
  width: 1128px;
  height: 1030px;
  border: 3px solid var(--orangeColor);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RecordTitle = styled.div`
  position: absolute;
  font-family: "Shrikhand";
  font-style: italic;
  font-weight: 400;
  font-size: 48px;
  line-height: 70px;
  color: #397f03;
  top: 80px;
  left: 399px;
  background: #f9f6eb;
  width: 400px;
  text-align: center;
`;
export const RecordSubtitle = styled.div`
  margin-top: 49px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--orangeColor);
`;
export const RecordDescription = styled.div`
  margin-top: 10px;
  width: 427px;
  height: 52px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  white-space: pre-line;
  text-align: center;
  display: flex;
  align-items: center;
`;
export const GridContainer = styled.div`
  margin-top: 76px;
  width: 973px;
  height: 769px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
export const RecordItem = styled.div`
  width: 100%;
  height: 100%;
  &:nth-child(2n-1) {
    border-right: 1px dashed #ff2617;
  }
  &:nth-child(2n) {
    padding-left: 67px;
  }
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 160%;
  color: var(--redColor);
  width: auto;
`;

export const Underline = styled.div`
  margin-top: 14px;
  width: 256px;
  height: 0px;
  border-top: 3px solid var(--redColor);
`;
export const UnderlineThird = styled.div`
  margin-top: 14px;
  height: 0px;
  border-top: 3px solid var(--redColor);
  width: 291px;
`;
export const UnderlineLast = styled.div`
  margin-top: 14px;
  height: 0px;
  border-top: 3px solid var(--redColor);
  width: 380px;
`;
export const RecordContents = styled.div`
  margin-top: 26px;
  width: 100%;
  display: flex;
`;
export const RecordContentsRightFirst = styled.div`
  margin-top: 6px;
  margin-left: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RankingNumber = styled.div`
  height: 28px;
  font-weight: 700;
  font-size: 34px;
  color: var(--redColor);
`;
export const NextBtn = styled.button`
  width: 36px;
  height: 36px;
  margin-top: 16px;
  background-color: #ff7b00;
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;
export const HashtagGrid = styled.div`
  margin-top: 26px;
  display: grid;
  width: 435px;
  height: 242px;
  grid-template-columns: 200.12fr 94.67fr 111.45fr;
  grid-template-rows: 110.77fr 55.38fr 49.36fr;
  column-gap: 14.38px;
  row-gap: 13px;
  div {
    font-weight: 700;
    line-height: 160%;
    color: white;
  }
`;
export const GridItem_1 = styled.div`
  padding: 12px;
  grid-row: 1/4;
  grid-column: 1/2;
  background-color: #47a400;
  border-radius: 5px;
  font-size: 26px;
`;
export const GridItem_2 = styled.div`
  padding: 12px;
  grid-column: 2/4;
  grid-row: 1/2;
  background-color: var(--redColor);
  border-radius: 5px;
  font-size: 20px;
`;
export const GridItem_3 = styled.div`
  padding: 12px;
  grid-column: 2/3;
  grid-row: 2/4;
  background-color: var(--yellowColor);
  border-radius: 5px;
  font-size: 16px;
`;
export const GridItem_4 = styled.div`
  padding: 10px;
  grid-column: 3/4;
  grid-row: 2/3;
  background-color: #ff7b00;
  border-radius: 5px;
  font-size: 14px;
`;
export const GridItem_5 = styled.div`
  padding: 10px;
  grid-column: 3/4;
  grid-row: 3/4;
  background-color: #ffc700;
  border-radius: 5px;
  font-size: 14px;
`;
export const RecordContentsRightSecond = styled.div`
  margin-left: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ListKeywordsText = styled.div`
  margin-top: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: var(--redColor);
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--redColor);
`;

export const KeywordsList = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 20px;
  li {
    margin-bottom: 5px;
    border-radius: 5px;
    padding-top: 4px;
    padding-left: 12px;
  }
  li:first-child {
    width: 90px;
    height: 32px;
    background-color: var(--redColor);
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: white;
  }
  li:nth-child(2) {
    width: 116px;
    height: 32px;
    background-color: #ffb001;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: white;
  }
  li:nth-child(3) {
    width: 140px;
    height: 32px;
    background-color: #ff7b00;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: white;
  }
`;
