import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
import ReviewBoxContainer from "../../../components/reviewBoxContainer/ReviewBoxContainer";
const Review = () => {
  const allReviews = useAllReviews();
  console.log(allReviews);

  return (
    <S.MainWrapper>
      <S.Banner
        src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
      />
      <S.Title>Reviews</S.Title>
      <S.SortOrderConatiner>
        <S.SortOrderItem>추천순</S.SortOrderItem>
        {" | "}
        <S.SortOrderItem>최신순</S.SortOrderItem>
      </S.SortOrderConatiner>
      <ReviewBoxContainer reviews={allReviews} />
    </S.MainWrapper>
  );
};
export default Review;
