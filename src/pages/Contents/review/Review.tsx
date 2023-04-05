import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
import ReviewBoxContainer from "../../../components/reviewBoxContainer/ReviewBoxContainer";
const Review = () => {
  return (
    <S.MainWrapper>
      <S.Banner
        src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
      />
      <S.Title>Reviews</S.Title>
      <ReviewBoxContainer />
    </S.MainWrapper>
  );
};
export default Review;
