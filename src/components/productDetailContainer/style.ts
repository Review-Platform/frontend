import styled from "styled-components";
export const DetailContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 808px;
  height: 296px;
  background-color: white;
  border: 2.6px solid #f48722;
  border-radius: 13.47px;
`;

export const ImgContainer = styled.div`
  width: 309px;
  height: 208px;
  margin-left: 68px;
  margin-top: 41px;
  background: url("/images/productImgBackground.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  height: 197px;
`;

export const InfoContainer = styled.div`
  width: auto;
  height: 229px;
  margin-left: 15px;
  margin-top: 33px;
`;
export const InfoBrandName = styled.div`
  font-weight: 700;
  font-size: 12.12px;
  line-height: 15px;
  color: var(--textColor);
`;
export const InfoProductName = styled.div`
  margin-top: 10px;
  color: rgba(25, 25, 25, 1);
  font-weight: 700;
  font-size: 17.5067px;
  line-height: 21px;
`;
export const CreateReviewBtn = styled.button`
  margin-top: 8.56px;
  border: 0.67px solid #f48722;
  border-radius: 3.37px;
  background-color: #fffbf7;
  width: 87.53px;
  height: 21.55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 9.42667px;
  line-height: 11px;
  color: #ff4a00;
  cursor: pointer;
  &:hover {
    background-color: #f48722;
    color: white;
  }
`;

export const InfoCalorie = styled.div`
  margin-top: 14.81px;
`;
export const CalorieTitle = styled.h1`
  font-weight: 700;
  color: var(--blackColor);
  font-size: 12.12px;
  line-height: 15px;
`;
export const Calorie = styled.div`
  margin-top: 8px;
  color: var(--blackColor);
  font-weight: 500;
  font-size: 10.7733px;
  line-height: 13px;
`;
export const InfoHashtags = styled.div`
  margin-top: 15px;
`;
export const HashtagsTitle = styled.h1`
  color: var(--blackColor);
  font-weight: 700;
  font-size: 12.12px;
  line-height: 15px;
`;
export const Hashtags = styled.ul`
  margin-top: 7.2px;
`;
export const HashtagList = styled.li``;
