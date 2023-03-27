import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
const Review = () => {
  const allReviews = useAllReviews();
  console.log(allReviews);

  return (
    <S.MainWrapper>
      <S.Banner
        src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
      />
      <S.Title>Reviews</S.Title>
    </S.MainWrapper>
  );
};
export default Review;
