import { ICreateReviewForm } from "../interfaces/createReviewForm";
import { IProductDetail } from "../interfaces/productDetail";
import { postCreateReview } from "../apis/api/reviewApi";
import { useQueryClient } from "react-query";

export function useCreateReview() {
  const queryClient = useQueryClient();
  const handleCreateReview = async ({
    createReviewForm,
    product,
  }: {
    createReviewForm: ICreateReviewForm;
    product: IProductDetail | undefined;
  }) => {
    const formData = new FormData();
    const dto = {
      content: createReviewForm.content,
      grade: createReviewForm.grade,
      flavorArr: createReviewForm.flavor,
      tagArr: createReviewForm.hashtags,
    };
    formData.append("image", createReviewForm.image[0]);
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    try {
      await postCreateReview(formData, product?.id).then((res) =>
        console.log(res)
      );
      await queryClient.invalidateQueries(["product", product?.id]);
      await queryClient.invalidateQueries(["AllReviews"]);
    } catch {
      console.log("리뷰 등록 에러 발생");
    }
  };
  return handleCreateReview;
}
