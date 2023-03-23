import * as S from "./style";
import useAllReviews from "../../../hooks/useAllReviews";
const Review = () => {
  const allReviews = useAllReviews();
  console.log(allReviews);

  return (
    <S.MainWrapper>
      {/* {allReviews?.map((review) => {
        review.reviewImages.length ? (
          <img
            src={require(`../../../imgs/reviewImg/${review.reviewImages[0].storedName}`)}
          />
        ) : (
          <></>
        );
      })} */}

      {/* {allReviews ? (
        <img
          src={require(`../../../imgs/reviewImg/${allReviews?.[1].reviewImages[0].storedName}`)}
        />
      ) : null} */}
      <h1>This is Review Page !</h1>
    </S.MainWrapper>
  );
};
export default Review;
