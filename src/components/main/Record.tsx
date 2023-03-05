import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BottomImg, Text, TextTop } from "../../styles/IntroStyle";
import MainSnackReview from "./MainSnackInfo";

const RecordReviewArea = styled.div`
  display: flex;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 72%;
  background-color: #ffefdf;
`;

const RecordArea = styled.div`
  display: flex;
  height: 40%;
`;

const RecordLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;
  width: 65%;
  border-right: 2px solid #ffce88;
  border-bottom: 2px solid #ffce88;
`;

const RecordTextImg = styled.img`
  height: 40px;
  width: 310px;
`;

const RecordLeftText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const RecordRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3vw;
  width: 35%;
  border-bottom: 2px solid #ffce88;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  padding-left: 10vw;
`;

const ImgArea = styled.img`
  width: 28%;
  height: 800px;
`;

const ReviewTextImg = styled.img`
  height: 40px;
  width: 170px;
  margin-bottom: 10px;
`;

const RecordText = styled.span`
  margin: 5px 0;
  line-height: 150%;
`;

const SnackInfoArea = styled.div`
  height: 50%;
  margin-top: 2vh;
  display: flex;
`;

const SnackInfo = styled.div`
  width: 45%;
  border: 2px solid #ff8a3b;
  border-radius: 15px;
  background-color: white;
  margin-right: 15px;
`;

const NavArea = styled.div`
  display: flex;
  align-items: center;
  margin: 2vh 0;
  cursor: pointer;
`;

const NavText = styled.span`
  color: gray;
`;

const NavIcon = styled.img`
  width: 20px;
  height: 18px;
  margin-left: 5px;
`;

const Record = () => {
  const navigate = useNavigate();
  return (
    <>
      <RecordReviewArea>
        <ContentArea>
          <RecordArea>
            <RecordLeft>
              <RecordTextImg src={require("../../imgs/SnackRecord.png")} />
              <TextTop>Snack of routine_ snack village.</TextTop>
              <TextArea>
                <RecordText>
                  이번 한 달 동안 가장 선호받았던 과자들을 소개합니다. 본
                  레코드는 본인이 직접 선호하고 추천했던 리뷰들을 반영합니다.
                  선호했던 과자들을 확인하고 개인의 입맛을 파악해보세요!
                </RecordText>
              </TextArea>
              <NavArea onClick={() => navigate("/")}>
                <NavText>이번 달의 스낵 순위 더 알아보기</NavText>
                <NavIcon src={require("../../imgs/RightArrow.png")} />
              </NavArea>
            </RecordLeft>
            <RecordRight>
              <TextArea>
                <TextTop>This year_ Snack Aworld</TextTop>
                <RecordText>
                  한 해동안 사랑받아온 과자들을 소개하는 ‘Snack Aworld’는 연말에
                  공개될 예정입니다.
                </RecordText>
                <RecordText>
                  오로지 여러분들의 리뷰를 기반한 어워드이니, 많은 기대와 리뷰
                  참여 부탁드립니다.
                </RecordText>
              </TextArea>
            </RecordRight>
          </RecordArea>
          <Review>
            <ReviewTextImg src={require("../../imgs/Review.png")} />
            <RecordText>
              여러 사람들이 직접 남긴 리뷰들을 확인해보세요!
            </RecordText>
            <RecordText>
              자신의 리뷰가 추가될수록, 더 많은 과자 추천을 받아볼 수 있습니다.
            </RecordText>
            <NavArea onClick={() => navigate("/review")}>
              <NavText>리뷰 자세히 보기</NavText>
              <NavIcon src={require("../../imgs/RightArrow.png")} />
            </NavArea>
            <SnackInfoArea>
              <MainSnackReview></MainSnackReview>
              <MainSnackReview></MainSnackReview>
            </SnackInfoArea>
          </Review>
        </ContentArea>
        <ImgArea src={require("../../imgs/RecordImg.png")}></ImgArea>
      </RecordReviewArea>
      <BottomImg />
    </>
  );
};

export default Record;
