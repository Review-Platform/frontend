import { ICreateReviewForm } from "../interfaces/createReviewForm";
import { IProductDetail } from "../interfaces/productDetail";
import { postCreateReview } from "../apis/api/createReview";

export function useCreateReview() {
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
    console.log(createReviewForm);
    formData.append("image", createReviewForm.image[0]);
    formData.append(
      "dto",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );
    try {
      await postCreateReview(formData, product?.id).then((res) =>
        console.log(res)
      );
      console.log("success");
    } catch {
      console.log("error");
    }
  };
  return handleCreateReview;
}
