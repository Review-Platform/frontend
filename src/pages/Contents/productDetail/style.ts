import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1200px;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--textColor);
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 0;
  margin-top: 42px;
  margin-left: 40px;
`;

export const DetailContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1200px;
  height: 440px;
  background-color: white;
  border: 4px solid #f48722;
  border-radius: 20px;
`;

export const ImgContainer = styled.div`
  width: 460px;
  height: 310px;
  margin-left: 110px;
  background: url("/images/background/productImgBackground.png");
  background-size: cover;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img``;

export const InfoContainer = styled.div`
  width: auto;
  height: 340px;
  margin-left: 30px;
  margin-top: 53px;
`;
export const InfoBrandName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: var(--textColor);
`;
export const InfoProductName = styled.div`
  margin-top: 10px;
  color: rgba(25, 25, 25, 1);
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;
export const CreateReviewBtn = styled.button`
  margin-top: 14px;
  border: none;
  border-radius: 5px;
  background-color: var(--subColor);
  width: 130px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;

export const InfoCalorie = styled.div`
  margin-top: 22px;
`;
export const CalorieTitle = styled.h1`
  font-weight: 700;
  color: var(--blackColor);
  font-size: 18px;
  line-height: 21px;
`;
export const Calorie = styled.div`
  margin-top: 8px;
  color: var(--blackColor);
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const InfoHashtags = styled.div`
  margin-top: 22px;
`;
export const HashtagsTitle = styled.h1`
  color: var(--blackColor);
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const Hashtags = styled.div``;
