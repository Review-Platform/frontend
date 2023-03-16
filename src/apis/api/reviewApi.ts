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
