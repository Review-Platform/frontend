import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { BottomImg, Text, TextTop } from "../introduction/style";
import MainSnackReview from "../mainSnackInfo/MainSnackInfo";

const Record = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.RecordReviewArea>
        <S.ContentArea>
          <S.RecordArea>
            <S.RecordLeft>
              <S.RecordTextImg src={require("../../../imgs/mainPage/SnackRecord.png")} />
              <TextTop>Snack of routine_ snack village.</TextTop>
              <S.TextArea>
                <S.RecordText>
                  이번 한 달 동안 가장 선호받았던 과자들을 소개합니다. 본
                  레코드는 본인이 직접 선호하고 추천했던 리뷰들을 반영합니다.
                  선호했던 과자들을 확인하고 개인의 입맛을 파악해보세요!
                </S.RecordText>
              </S.TextArea>
              <S.NavArea onClick={() => navigate("/")}>
                <S.NavText>이번 달의 스낵 순위 더 알아보기</S.NavText>
                <S.NavIcon src={require("../../../imgs/mainPage/RightArrow.png")} />
              </S.NavArea>
            </S.RecordLeft>
            <S.RecordRight>
              <S.TextArea>
                <TextTop>This year_ Snack Aworld</TextTop>
                <S.RecordText>
                  한 해동안 사랑받아온 과자들을 소개하는 ‘Snack Aworld’는 연말에
                  공개될 예정입니다.
                </S.RecordText>
                <S.RecordText>
                  오로지 여러분들의 리뷰를 기반한 어워드이니, 많은 기대와 리뷰
                  참여 부탁드립니다.
                </S.RecordText>
              </S.TextArea>
            </S.RecordRight>
          </S.RecordArea>
          <S.Review>
            <S.ReviewTextImg src={require("../../../imgs/mainPage/Review.png")} />
            <S.RecordText>
              여러 사람들이 직접 남긴 리뷰들을 확인해보세요!
            </S.RecordText>
            <S.RecordText>
              자신의 리뷰가 추가될수록, 더 많은 과자 추천을 받아볼 수 있습니다.
            </S.RecordText>
            <S.NavArea onClick={() => navigate("/review")}>
              S.<S.NavText>리뷰 자세히 보기</S.NavText>
              <S.NavIcon src={require("../../../imgs/mainPage/RightArrow.png")} />
            </S.NavArea>
            <S.SnackInfoArea>
              <MainSnackReview />
              <MainSnackReview />
            </S.SnackInfoArea>
          </S.Review>
        </S.ContentArea>
        <S.ImgArea src={require("../../../imgs/mainPage/RecordImg.png")}></S.ImgArea>
      </S.RecordReviewArea>
      <BottomImg />
    </>
  );
};

export default Record;
