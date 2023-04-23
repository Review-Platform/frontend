import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ReviewBoxHorizontal from "../../../components/reviewBox/horizontal/ReviewBoxHorizontal";
import { IReview } from "../../../interfaces/review";

const ReviewExample: IReview = {
  reviewId: 1,
  content:
    "가족들이랑 축구 경기 보면서 먹었어요! 맥주랑 먹기 괜찮아서 추천합니다~",
  grade: 5,
  reviewImages: [],
  regTime: "2023-04-03T23:40:59.105437",
  product: {
    id: 2,
    name: "초코파이情 바나나",
    avgGrade: 4.8,
    localPath:
      "/Users/hwangtaehwan/Desktop/snackvillage/frontend/public/images/productImg/초코파이情 바나나.jpg",
  },
  user: {
    userId: "joohoneywalker",
    userName: "황태환",
  },
  flavor: '{"salty":1,"spicy":1,"sweet":1,"sour":1}',
  tagNames: ["영화", "안주", "인기", "가족", "일상", "오리지날", "다이어트"],
  reviewLikeCount: 10,
};

function Home() {
  const navigate = useNavigate();
  const handleGoRecordClick = () => navigate("/record");
  const handleGoReviewClick = () => navigate("/review");

  return (
    <S.Wrapper>
      <S.Row1>
        <S.ServiceIntroBgBox>
          <S.ServiceIntroBox>
            <S.ServiceIntroBox>
              <S.ServiceName>Snack Village</S.ServiceName>
              <S.ServiceIntro>
                스낵빌리지는 일상 속에 함께하는 간식 타임을 어떤 이유로,{"\n"}
                어떤 방식으로든 즐기는 사람들을 위해 시작한 국내 과자 레코드
                플랫폼입니다.
              </S.ServiceIntro>
              <S.ServiceIntro>
                여러분들이 직접 참여한 과자 리뷰들을 통해 스낵빌리지는 즐거운
                순간을 위해{"\n"}
                스낵 어워드, 스낵 추천, 스낵 레코드 등 다양한 서비스를
                제공합니다.
              </S.ServiceIntro>
            </S.ServiceIntroBox>
          </S.ServiceIntroBox>
        </S.ServiceIntroBgBox>
        <S.ServiceIntroBottomBelt
          src={require("../../../imgs/mainPage/BottomBelt1.png")}
        />
        <S.BrandImgs>
          <S.BrandImg src={require("../../../imgs/mainPage/BrandImg1.png")} />
          <S.BrandImg src={require("../../../imgs/mainPage/BrandImg2.png")} />
        </S.BrandImgs>
        <S.IfYouHadBox>
          <S.IfYouHad>
            if you{"\n"}
            had a{"\n"}
            good{"\n"} time
          </S.IfYouHad>
        </S.IfYouHadBox>
      </S.Row1>

      <S.Row2>
        <S.SnackRecord>
          <S.BorderRight
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <S.SnackRecordIntroContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <S.SnackRecordIntroContainerCol1>
              <S.SnackRecordTitle>Snack Record</S.SnackRecordTitle>
              <S.SnackRecordIntro>
                이번 한 달 도안 개인 선호했던 과자들을 소개합니다.{"\n"} 본
                레코드는 본인이 직접 선호하고 추천했던 리뷰들을 반영합니다.{" "}
                {"\n"}선호했던 과자들을 확인하고 개인의 입맛을 파악해보세요!
              </S.SnackRecordIntro>
              <S.SnackRecordLink onClick={handleGoRecordClick}>
                이번달 스낵레코드 확인하기 <S.RightArrow> {">"} </S.RightArrow>
              </S.SnackRecordLink>
              <S.SnackRecordLinkBorder></S.SnackRecordLinkBorder>
            </S.SnackRecordIntroContainerCol1>
            <S.SnackRecordIntroContainerCol2>
              <S.SnackAwardTitle>This year{"\n"}Snack Award</S.SnackAwardTitle>
              <S.SnackAwardIntro>
                한 해동안 사랑받아온 과자들을 소개하는 ‘Snack Award’는 연말에
                공개될 예정입니다.{"\n"}
                오로지 여러분들의 리뷰를 기반한 어워드이니, 많은 기대와 리뷰
                참여 부탁드립니다.
              </S.SnackAwardIntro>
            </S.SnackRecordIntroContainerCol2>
          </S.SnackRecordIntroContainer>
          <S.ReviewContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <S.ReviewTitle>Review</S.ReviewTitle>
            <S.ReviewIntro>
              여러 사람들이 직접 남긴 리뷰들을 확인해보세요!{"\n"} 자신의 리뷰가
              추가될수록, 더 많은 과자 추천을 받아볼 수 있습니다.
            </S.ReviewIntro>
            <S.ReviewLink onClick={handleGoReviewClick}>
              자세히 보기 <S.RightArrow>{">"}</S.RightArrow>
            </S.ReviewLink>
            <S.ReviewLinkBorder />
            <S.ReviewExampleContainer>
              <S.ReviewBoxWrapper>
                <ReviewBoxHorizontal review={ReviewExample} product={null} />{" "}
              </S.ReviewBoxWrapper>
              <S.ReviewArrowBtn onClick={handleGoReviewClick}>
                {">"}
              </S.ReviewArrowBtn>
            </S.ReviewExampleContainer>
          </S.ReviewContainer>
        </S.SnackRecord>
      </S.Row2>
      <S.Row2BottomBeltContainer>
        <S.Row2BottomBelt
          src={require("../../../imgs/mainPage/BottomBelt2.png")}
        />
      </S.Row2BottomBeltContainer>

      <S.Row3>
        <S.RoutineContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <S.RoutineTitle>Snack of routine</S.RoutineTitle>
          <S.TitleBorder />
          <S.RoutineIntro>
            스낵빌리지는 단 하루를 생각하더라도 조금 더 즐거운 순간을{"\n"}
            추억할 줄 알는 여러분들의 생활을 응원합니다.
          </S.RoutineIntro>
          <S.RoutineImgContainer>
            <S.RoutineImg
              src={require("../../../imgs/mainPage/RoutineImg1.png")}
            />
            <S.RoutineImg
              src={require("../../../imgs/mainPage/RoutineImg2.png")}
            />
            <S.RoutineImg
              src={require("../../../imgs/mainPage/RoutineImg1.png")}
            />
            <S.RoutineImg
              src={require("../../../imgs/mainPage/RoutineImg2.png")}
            />
            <S.RoutineImg
              src={require("../../../imgs/mainPage/RoutineImg2.png")}
            />
          </S.RoutineImgContainer>
        </S.RoutineContainer>
      </S.Row3>
      <S.BottomBox />
    </S.Wrapper>
  );
}
export default Home;
