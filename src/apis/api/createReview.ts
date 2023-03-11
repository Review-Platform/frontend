import { ICreateReviewForm } from "../../interfaces/createReviewForm";
import { baseApi } from "../utils/instance";

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
