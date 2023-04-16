import * as S from "./style";
import { useEffect, useState } from "react";
import ReviewBox from "../reviewBox/ReviewBox";
import useAllReviews from "../../hooks/useAllReviews";
import Pagination from "../pagination/Pagination";
import { IReview } from "../../interfaces/review";
import { IProductDetail } from "../../interfaces/productDetail";
import useSortOrder from "../../hooks/useSortOrder";

function ReviewBoxContainer({
  reviews,
  timeOrderArr,
  likeOrderArr,
  product,
}: {
  reviews: IReview[];
  timeOrderArr: IReview[];
  likeOrderArr: IReview[];
  product: IProductDetail | null;
}) {
  const [page, setPage] = useState(1); //현재 페이지
  const [total, setTotal] = useState(6); //전체 가능한 페이지
  const { isTimeOrder, handleTimeOrder, handleLikeOrder } =
    useSortOrder(setPage);
  useEffect(() => {
    if (reviews?.length) {
      setTotal(reviews.length);
    }
  }, [reviews]);

  return (
    <S.Container>
      <S.SortOrderConatiner>
        <S.SortOrderItem selected={!isTimeOrder} onClick={handleLikeOrder}>
          추천순
        </S.SortOrderItem>
        {" | "}
        <S.SortOrderItem selected={isTimeOrder} onClick={handleTimeOrder}>
          최신순
        </S.SortOrderItem>
      </S.SortOrderConatiner>
      <S.ReviewBoxs>
        {isTimeOrder
          ? timeOrderArr.slice((page - 1) * 6, page * 6).map((review) => (
              <S.ReviewBoxList key={review.reviewId}>
                <ReviewBox review={review} product={product} />
              </S.ReviewBoxList>
            ))
          : likeOrderArr.slice((page - 1) * 6, page * 6).map((review) => (
              <S.ReviewBoxList key={review.reviewId}>
                <ReviewBox review={review} product={product} />
              </S.ReviewBoxList>
            ))}
      </S.ReviewBoxs>
      <Pagination total={total} limit={6} page={page} setPage={setPage} />
    </S.Container>
  );
}
export default ReviewBoxContainer;
