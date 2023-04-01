import * as S from "./style";
import { useEffect, useState } from "react";
import { IReview } from "../../interfaces/review";
import ReviewBox from "../reviewBox/ReviewBox";
import ScrollToTop from "../ScrollToTop";

function ReviewBoxContainer({ reviews }: { reviews: IReview[] | undefined }) {
  const [reviewArr, setReviewArr] = useState<IReview[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageArr, setPageArr] = useState<number[]>([1]);
  const [isTimeOrder, setIsTimeOrder] = useState(true);
  const handlePageChange = (i: number) => {
    setPageNum(i);
    window.scrollTo(0, 500);
  };
  const handleTimeOrder = () => setIsTimeOrder(true); //최신순으로
  const handleLikeOrder = () => setIsTimeOrder(false); //추천순으로

  useEffect(() => {
    const temp: IReview[] | undefined = reviews;
    if (temp) {
      temp.sort((a, b) => a.reviewLikeCount - b.reviewLikeCount);
      setReviewArr(temp);
    } else {
      setReviewArr([]);
    }
  }, [handleTimeOrder, handleLikeOrder]);

  useEffect(() => {
    if (reviews?.length) {
      const maxPages = Math.ceil(reviews?.length / 6);
      const arr = Array.from({ length: maxPages }, (v, i) => i + 1);
      setPageArr(arr);
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
        {reviewArr?.slice((pageNum - 1) * 6, pageNum * 6).map((review) => (
          <S.ReviewBoxList key={review.reviewId}>
            <ReviewBox review={review} product={null} />
          </S.ReviewBoxList>
        ))}
      </S.ReviewBoxs>
      <S.PageBtnsContainer>
        {pageArr.map((i) => (
          <S.PageBtn
            clicked={pageNum === i ? true : false}
            onClick={() => handlePageChange(i)}
            key={i}
          >
            {i}
          </S.PageBtn>
        ))}
      </S.PageBtnsContainer>
    </S.Container>
  );
}
export default ReviewBoxContainer;
