import { useQuery } from "react-query";
import { getMyBest, getMostReviews } from "../apis/api/recordApi";
import { IRecordProduct } from "../interfaces/record";

function useRecord() {
  const { data: myBest } = useQuery<IRecordProduct[]>(
    ["record", "myBest"],
    getMyBest
  );
  const { data: mostReviews } = useQuery<IRecordProduct[]>(
    ["record", "mostReviews"],
    getMostReviews
  );

  return { myBest, mostReviews };
}
export default useRecord;
