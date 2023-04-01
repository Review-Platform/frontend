import { useQuery } from "react-query";
import { getAllReviews } from "../apis/api/reviewApi";
import { IReview } from "../interfaces/review";
function useAllReviews() {
  const { data: allReviews } = useQuery<IReview[]>(
    ["AllReviews"],
    getAllReviews,
    { refetchOnWindowFocus: false }
  );
  console.log(allReviews);

  return allReviews;
}
export default useAllReviews;
