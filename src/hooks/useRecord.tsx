import { useQueries, useQuery } from "react-query";
import {
  getMyBest,
  getMostReviews,
  getMyHashtags,
  getRanking,
  getTopReview,
} from "../apis/api/recordApi";
import { IRankingProduct, IRecordProduct } from "../interfaces/record";
import { useEffect, useState } from "react";

function useRecord() {
  const { data: ranking, isSuccess: rankingIsSuccess } = useQuery<
    IRankingProduct[]
  >(["record", "ranking"], getRanking);
  const {
    data: myHashtagsData,
    isSuccess: myHashtagsIsSuccess,
    isError: myHashtagsIsError,
  } = useQuery<string[]>(["record", "myHashtags"], getMyHashtags, { retry: 0 });
  const {
    data: myBest,
    isSuccess: myBestIsSuccess,
    isError: myBestIsError,
  } = useQuery<IRecordProduct[]>(["record", "myBest"], getMyBest, {
    retry: 0,
  });
  const { data: mostReviews, isSuccess: mostReviewsIsSuccess } = useQuery<
    IRecordProduct[]
  >(["record", "mostReviews"], getMostReviews);
  const { data: topReview, isSuccess: topReivewIsSuccess } =
    useQuery<IRecordProduct>(["record", "topReivew"], getTopReview);

  const [myBestIdx, setMyBestIdx] = useState(0);
  const [myBestRank, setMyBestRank] = useState<string>("1st");
  const [myHashtags, setMyHashtags] = useState<string[] | null>();
  const [mostReviewsIdx, setMostReviewsIdx] = useState(0);
  const [myBestProd, setMyBestProd] = useState<IRecordProduct | null>();
  const [mostReviewsProd, setMostReviewsProd] =
    useState<IRecordProduct | null>();

  const seeNextMyBest = () => {
    setMyBestIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const seeNextMostReviews = () => {
    setMostReviewsIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (myBestIsSuccess) {
      if (myBest.length < 3) setMyBestProd(null);
      else setMyBestProd(myBest[myBestIdx]);
    }
    if (myBestIsError) {
      setMyBestProd(null);
    }
    if (myHashtagsIsSuccess) {
      setMyHashtags(myHashtagsData);
    }
    if (myHashtagsIsError) {
      setMyHashtags(null);
    }
    if (myBestIdx === 0) setMyBestRank("1st");
    if (myBestIdx === 1) setMyBestRank("2nd");
    if (myBestIdx === 2) setMyBestRank("3rd");
    if (mostReviewsIsSuccess) setMostReviewsProd(mostReviews[mostReviewsIdx]);
  }, [
    myBest,
    myHashtagsData,
    mostReviews,
    myBestIdx,
    mostReviewsIdx,
    myBestIsError,
  ]);

  return {
    ranking,
    myHashtags,
    myBestProd,
    mostReviewsProd,
    seeNextMyBest,
    seeNextMostReviews,
    myBestRank,
    topReview,
  };
}
export default useRecord;
