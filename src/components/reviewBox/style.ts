import styled from "styled-components";

export const Box = styled.div`
  width: 808px;
  height: 218px;
  border-radius: 10px;
  border: 2px solid #f48722;
  background-color: #fff4e9;
  display: grid;
  grid-template-columns: 140fr 340fr 328fr;
  margin-bottom: 14px;
  box-sizing: border-box;
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ReviewImg = styled.img`
  width: 110px;
  height: 110px;
  margin-top: 12px;
`;

export const ReviewProductName = styled.div`
  margin-left: 3px;
  color: #ff4a00;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  margin-top: 10px;
  text-align: center;
`;

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0 12px 6px;
`;
export const UserInfoContainer = styled.div`
  width: 170px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-left: 8px;
`;
export const RatingContainer = styled.div`
  width: 168px;
  height: 17px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3px;
`;
export const RatingTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-top: 6px;
  color: #f48722;
  margin-right: 8px;
`;
export const RecommendContainer = styled.div`
  margin-top: 8px;
  width: auto;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ThumbIcon = styled.img`
  width: 21px;
  height: 20px;
`;
export const RecommendNumber = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ff4a00;
  margin-left: 8px;
`;
export const RecommendBtn = styled.button`
  width: 64px;
  height: 24px;
  background-color: #f48722;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    background-color: #fffbf7;
    color: #f48722;
    border: 0.6px solid #f48722;
  }
`;
export const ReviewText = styled.div`
  width: 310px;
  height: 102px;
  margin-top: 8px;
  background-color: white;
  padding: 8px 7.3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #191919;
  border-radius: 5px;
`;
export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 2px;
`;
export const FlavorContainer = styled.div`
  width: 180px;
  height: auto;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;
export const FlavorTitle = styled.div`
  color: var(--redColor);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const Flavors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;
`;
export const FlavorItem = styled.div`
  display: flex;
  margin-top: 8px;
`;
export const FlavorName = styled.div`
  color: var(--redColor);
  width: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-right: 6px;
`;
export const FlavorLevel = styled.div`
  color: #ff2617;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
export const HashtagContainer = styled.div`
  margin-top: 12px;
  width: 310px;
  height: 102px;
  display: flex;
  flex-direction: column;
`;
export const HashtagTitle = styled.div`
  color: var(--redColor);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const HashtagsRow = styled.div`
  height: 35px;
  width: auto;
  display: flex;
  margin-top: 8px;
  &:nth-child(2) {
    margin-top: 6px;
  }
`;
