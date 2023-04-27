import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
import ReviewBoxContainerVertical from "../../../components/reviewBoxContainer/vertical/ReviewBoxContainerVertical";
const Review = () => {
  const { allReviews, timeOrderArr, likeOrderArr } = useAllReviews();
  return (
    <S.MainWrapper>
      <S.Banner
        src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
      />
      <S.Title>Reviews</S.Title>
      {allReviews ? (
        <ReviewBoxContainerVertical
          reviews={allReviews}
          timeOrderArr={timeOrderArr}
          likeOrderArr={likeOrderArr}
          product={null}
        />
      ) : null}
    </S.MainWrapper>
  );
};
export default Review;
