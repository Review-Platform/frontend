import { useQuery } from "react-query";
import { getAllReviews } from "../apis/api/reviewApi";
import { IReview, Tags } from "../interfaces/review";
function useAllReviews() {
  const { data: allReviews } = useQuery<IReview[]>(
    ["AllReviews"],
    getAllReviews,
    {}
  );
  console.log(allReviews);
  // allReviews?.forEach((review, index) => {
  //   if (review.reviewImages[0]) {
  //     testImgArr[index] = review.reviewImages[0].storedName;
  //   }
  // });

  return allReviews;
}
export default useAllReviews;
