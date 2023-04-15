import { useQuery } from "react-query";
import {
  getMyBest,
  getMostReviews,
  getMyHashtags,
} from "../apis/api/recordApi";
import { IRecordProduct } from "../interfaces/record";
import { useEffect, useState } from "react";

function useRecord() {
  const { data: myHashtags, isSuccess: myHashtagsIsSuccess } = useQuery<
    string[]
  >(["record", "myHashtags"], getMyHashtags);
  const { data: myBest, isSuccess: myBestIsSuccess } = useQuery<
    IRecordProduct[]
  >(["record", "myBest"], getMyBest);
  const { data: mostReviews, isSuccess: mostReviewsIsSuccess } = useQuery<
    IRecordProduct[]
  >(["record", "mostReviews"], getMostReviews);

  const [myBestIdx, setMyBestIdx] = useState(0);
  const [myBestRank, setMyBestRank] = useState<string>("1st");
  const [mostReviewsIdx, setMostReviewsIdx] = useState(0);
  const [myBestProd, setMyBestProd] = useState<IRecordProduct>();
  const [mostReviewsProd, setMostReviewsProd] = useState<IRecordProduct>();

  const seeNextMyBest = () => {
    setMyBestIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const seeNextMostReviews = () => {
    setMostReviewsIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (myBestIsSuccess) {
      setMyBestProd(myBest[myBestIdx]);
    }
    if (myBestIdx === 0) setMyBestRank("1st");
    if (myBestIdx === 1) setMyBestRank("2nd");
    if (myBestIdx === 2) setMyBestRank("3rd");

    if (mostReviewsIsSuccess) setMostReviewsProd(mostReviews[mostReviewsIdx]);
  }, [myBest, mostReviews, myBestIdx, mostReviewsIdx]);

  return {
    myHashtags,
    myBestProd,
    mostReviewsProd,
    seeNextMyBest,
    seeNextMostReviews,
    myBestRank,
  };
}
export default useRecord;
