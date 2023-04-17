import styled from "styled-components";

export const Box = styled.div`
  width: 412px;
  height: 560px;
  border-radius: 10px;
  border: 2px solid #f48722;
  background-color: #fff4e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 26px;
`;

export const Row1 = styled.div`
  width: 338px;
  height: 140px;
  display: flex;
`;

export const Row1Left = styled.div`
  width: 118px;
  height: 140px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReviewImg = styled.img`
  width: 110px;
  height: 100px;
`;

export const Row1BottomBorder = styled.div`
  width: 384px;
  border: none;

  border-bottom: 1px solid #ffd5ae;
`;

export const ReviewProductName = styled.div`
  color: #ff4a00;
  font-weight: 700;
  font-size: 14px;
  width: 110px;
  height: 30px;
  margin-top: 10px;
  text-align: center;
`;

export const Row1Right = styled.div`
  width: 170px;
  height: 107px;
  margin-left: 50px;
  margin-top: 7px;
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
export const WrittenDate = styled.div`
  margin-top: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: black;
  span:first-child {
    color: #717171;
  }
`;

////////Row2////////

export const Row2 = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 15px;
`;
export const FlavorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`;
export const FlavorTitle = styled.div`
  color: var(--redColor);
  width: 52px;
  height: 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const Flavors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 13px;
  row-gap: 3px;
  margin-top: 10px;
`;
export const FlavorItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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

//////Row3//////

export const Row3 = styled.div`
  width: 100%;
  height: auto;
`;
export const HashtagContainer = styled.div`
  margin-top: 20px;
  width: 310px;
  height: auto;
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

//Row4
export const Row4 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ReviewText = styled.div`
  width: 360px;
  height: 141px;
  background-color: white;
  padding: 8px 7.3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #191919;
  border-radius: 5px;
`;
