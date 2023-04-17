import * as S from "./style";
import { useEffect, useState } from "react";
import ReviewBoxHorizontal from "../../reviewBox/horizontal/ReviewBoxHorizontal";
import useAllReviews from "../../../hooks/useAllReviews";
import Pagination from "../../pagination/Pagination";
import { IReview } from "../../../interfaces/review";
import { IProductDetail } from "../../../interfaces/productDetail";
import useSortOrder from "../../../hooks/useSortOrder";
import ReviewBoxVertical from "../../reviewBox/vertical/ReviewBoxVertical";

function ReviewBoxContainerHorizontal({
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
      setTotal(Math.ceil(reviews.length / 6));
    }
  }, [reviews]);
  const handleSeeMoreBtnClick = () => setPage((prev) => prev + 1);

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
      {/* 제품상세정보 페이지에 보여지는 리뷰 (horizontal) */}
      {product === null ? null : (
        <S.ReviewBoxsHorizontal>
          {isTimeOrder
            ? timeOrderArr.slice(0, page * 6).map((review) => (
                <S.ReviewBoxList key={review.reviewId}>
                  <ReviewBoxHorizontal review={review} product={product} />
                </S.ReviewBoxList>
              ))
            : likeOrderArr.slice(0, page * 6).map((review) => (
                <S.ReviewBoxList key={review.reviewId}>
                  <ReviewBoxHorizontal review={review} product={product} />
                </S.ReviewBoxList>
              ))}
        </S.ReviewBoxsHorizontal>
      )}
      {page === total ? null : (
        <S.SeeMoreBtn onClick={handleSeeMoreBtnClick}>
          더보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--redColor)"
            height="20px"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </S.SeeMoreBtn>
      )}
    </S.Container>
  );
}
export default ReviewBoxContainerHorizontal;
