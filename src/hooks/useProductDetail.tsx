import { useQuery } from "react-query";
import { getProductDetail } from "../apis/api/productDetailApi";
import { IProductDetail } from "../interfaces/productDetail";
import { IReview } from "../interfaces/review";
import { useEffect, useState } from "react";

function useProductDetail(id: number) {
  const { data: product } = useQuery(
    ["product", Number(id)],
    () => getProductDetail(Number(id)),
    {
      staleTime: 30000,
    }
  );
  const [productReviews, setProductReviews] = useState<IReview[]>([]);
  const [timeOrderArr, setTimeOrderArr] = useState<IReview[]>([]);
  const [likeOrderArr, setLikeOrderArr] = useState<IReview[]>([]);

  useEffect(() => {
    setProductReviews(product?.reviews);
    setTimeOrderArr(productReviews ? [...productReviews.reverse()] : []);
    setLikeOrderArr(
      productReviews
        ? [
            ...productReviews.sort(
              (a, b) => b.reviewLikeCount - a.reviewLikeCount
            ),
          ]
        : []
    );
  }, [product, productReviews]);
  return { product, productReviews, timeOrderArr, likeOrderArr };
}
export default useProductDetail;
