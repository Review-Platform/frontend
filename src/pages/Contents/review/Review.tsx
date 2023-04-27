import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
import ReviewBoxContainer from "../../../components/reviewBoxContainer/ReviewBoxContainer";
import { Suspense } from "react";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const navigate = useNavigate();
  const handleGoRecord = () => navigate("/record");
  return (
    <S.MainWrapper>
      <Suspense fallback={<Loading />}>
        <S.Banner
          onClick={handleGoRecord}
          src={require("../../../imgs/reviewPage/snackRankingBanner.png")}
        />
        <S.Title>Reviews</S.Title>
        <ReviewBoxContainer />
      </Suspense>
    </S.MainWrapper>
  );
};
export default Review;
