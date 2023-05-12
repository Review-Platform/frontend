import { ICreateReviewForm } from "../../interfaces/createReviewForm";
import { baseApi } from "../utils/instance";

//리뷰 작성
export const postCreateReview = (
  formData: FormData,
  productId: number | undefined
) => {
  console.log(formData);
  return baseApi.post(`/products/${productId}/review`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//리뷰 전체 조회
export const getAllReviews = () =>
  baseApi.get(`/reviews`).then((res) => res.data);

//리뷰 추천
export const likeReview = (reviewId: number) =>
  baseApi.post(`/review-like/${reviewId}`, {}).then((res) => res.data);

export const deleteLikeReview = (reviewId: number) =>
  baseApi.delete(`/review-like/${reviewId}`).then((res) => res.data);

//내가 쓴 리뷰
export const myReviews = () =>
  baseApi.get("/myReviews").then((res) => res.data);
