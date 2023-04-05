import * as S from "./style";
import { useEffect, useState } from "react";
import ReviewBox from "../reviewBox/ReviewBox";
import useAllReviews from "../../hooks/useAllReviews";
import Pagination from "../pagination/Pagination";

function ReviewBoxContainer() {
  const { allReviews: reviews, timeOrderArr, likeOrderArr } = useAllReviews();

  const [page, setPage] = useState(1); //현재 페이지
  const [total, setTotal] = useState(6); //전체 가능한 페이지
  const [isTimeOrder, setIsTimeOrder] = useState(true); //최신순, 추천순 설정
  const handleTimeOrder = () => {
    setIsTimeOrder(true);
  }; //최신순으로
  const handleLikeOrder = () => {
    setIsTimeOrder(false);
  }; //추천순으로

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
                <ReviewBox review={review} product={null} />
              </S.ReviewBoxList>
            ))
          : likeOrderArr.slice((page - 1) * 6, page * 6).map((review) => (
              <S.ReviewBoxList key={review.reviewId}>
                <ReviewBox review={review} product={null} />
              </S.ReviewBoxList>
            ))}
      </S.ReviewBoxs>
      <Pagination total={total} limit={6} page={page} setPage={setPage} />
    </S.Container>
  );
}
export default ReviewBoxContainer;
