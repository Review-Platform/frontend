import { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllReviews } from "../apis/api/reviewApi";
import { IReview } from "../interfaces/review";
function useAllReviews() {
  const [timeOrderArr, setTimeOrderArr] = useState<IReview[]>([]);
  const [likeOrderArr, setLikeOrderArr] = useState<IReview[]>([]);
  const { data: allReviews, isLoading } = useQuery<IReview[]>(
    ["AllReviews"],
    getAllReviews,
    { suspense: true }
  );
  useEffect(() => {
    setTimeOrderArr(allReviews ? [...allReviews.reverse()] : []);
    setLikeOrderArr(
      allReviews
        ? [...allReviews.sort((a, b) => b.reviewLikeCount - a.reviewLikeCount)]
        : []
    );
  }, [allReviews]);
  return { allReviews, isLoading, timeOrderArr, likeOrderArr };
}
export default useAllReviews;
