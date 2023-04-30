import { baseApi } from "../utils/instance";

const RANKING_URI = "topTenSnacks";
const MYHASHTAGS_URI = "myBestHashTags";
const MYBEST_URI = "myBestSnack";
const MOSTREVIEWS_URT = "bestReviewProducts";
const TOPREVIEW_URI = "topReview";

//탑텐 랭킹
export const getRanking = () =>
  baseApi.get(RANKING_URI).then((res) => res.data);

//이번 달 나의 스낵 키워드
export const getMyHashtags = () =>
  baseApi.get(MYHASHTAGS_URI).then((res) => res.data);

//나의 최애 스낵
export const getMyBest = () => baseApi.get(MYBEST_URI).then((res) => res.data);

//최고 스낵들
export const getMostReviews = () =>
  baseApi.get(MOSTREVIEWS_URT).then((res) => res.data);

//추천 많은 리뷰
export const getTopReview = () =>
  baseApi.get(TOPREVIEW_URI).then((res) => res.data);
