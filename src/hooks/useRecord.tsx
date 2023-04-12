import { useQuery } from "react-query";
import { getMyBest, getMostReviews } from "../apis/api/recordApi";
import { IRecordProduct } from "../interfaces/record";
import { useEffect, useState } from "react";

function useRecord() {
  const { data: myBest, isSuccess: myBestIsSuccess } = useQuery<
    IRecordProduct[]
  >(["record", "myBest"], getMyBest);
  const { data: mostReviews, isSuccess: mostReviewsIsSuccess } = useQuery<
    IRecordProduct[]
  >(["record", "mostReviews"], getMostReviews);

  const [myBestIdx, setMyBestIdx] = useState(0);
  const [mostReviewsIdx, setMostReviewsIdx] = useState(0);
  const [myBestProd, setMyBestProd] = useState<IRecordProduct>();
  const [mostReviewsProd, setMostReviewsProd] = useState<IRecordProduct>();

  const seeNextMyBest = () => {
    console.log("Clicked");
    setMyBestIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const seeNextMostReviews = () => {
    setMostReviewsIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (myBestIsSuccess) setMyBestProd(myBest[myBestIdx]);
    if (mostReviewsIsSuccess) setMostReviewsProd(mostReviews[mostReviewsIdx]);
  }, [myBest, mostReviews, myBestIdx, mostReviewsIdx]);

  return { myBestProd, mostReviewsProd, seeNextMyBest, seeNextMostReviews };
}
export default useRecord;
