import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
const Review = () => {
  const allReviews = useAllReviews();
  console.log(allReviews);

  return (
    <S.MainWrapper>
      <h1>This is Review Page !</h1>
    </S.MainWrapper>
  );
};
export default Review;
