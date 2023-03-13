import { ICreateReviewForm } from "../interfaces/createReviewForm";
import { IProductDetail } from "../interfaces/productDetail";
import { postCreateReview } from "../apis/api/createReview";
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
    };
    formData.append("image", createReviewForm.image[0]);
    formData.append(
      "flavor",
      new Blob([JSON.stringify(createReviewForm.flavor)], {
        type: "application/json",
      })
    );
    formData.append(
      "tag",
      new Blob([JSON.stringify(createReviewForm.hashtags)], {
        type: "application/json",
      })
    );
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    try {
      await postCreateReview(formData, product?.id).then((res) =>
        console.log(res)
      );
      await queryClient.invalidateQueries(["product", product?.id]);
      console.log("success");
    } catch {
      console.log("error");
    }
  };
  return handleCreateReview;
}
