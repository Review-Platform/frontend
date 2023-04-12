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

export const Ranking = styled.div`
  margin-top: 46px;
  width: 1120px;
  height: 266px;
  border: 0.5px solid black;
`;

export const RecordBox = styled.div`
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
export const RecordContentsRight = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  height: 100%;
  width: 48px;
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
