import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
import ReviewBoxContainerVertical from "../../../components/reviewBoxContainer/vertical/ReviewBoxContainerVertical";
import { Suspense } from "react";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const navigate = useNavigate();
  const { allReviews, timeOrderArr, likeOrderArr } = useAllReviews();
  const handleBannerClick = () => navigate("/record");
  return (
    <S.MainWrapper>
      <S.Banner
        src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
        onClick={handleBannerClick}
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
