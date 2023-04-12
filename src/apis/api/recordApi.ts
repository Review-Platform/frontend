import { baseApi } from "../utils/instance";

const MYBEST_URI = "myBestSnack";
const MOSTREVIEWS_URT = "bestReviewProducts";

//나의 최애 스낵
export const getMyBest = () => baseApi.get(MYBEST_URI).then((res) => res.data);

//최고 스낵들
export const getMostReviews = () =>
  baseApi.get(MOSTREVIEWS_URT).then((res) => res.data);
