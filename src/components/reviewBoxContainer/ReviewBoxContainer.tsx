import * as S from "./style";
import { useEffect, useState } from "react";
import { IReview } from "../../interfaces/review";
import ReviewBox from "../reviewBox/ReviewBox";
import ScrollToTop from "../ScrollToTop";

function ReviewBoxContainer({ reviews }: { reviews: IReview[] | undefined }) {
  const [pageNum, setPageNum] = useState(1);
  const [pageArr, setPageArr] = useState<number[]>([1]);
  const handlePageChange = (i: number) => {
    setPageNum(i);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (reviews?.length) {
      const maxPages = Math.ceil(reviews?.length / 6);
      const arr = Array.from({ length: maxPages }, (v, i) => i + 1);
      setPageArr(arr);
    }
  }, [reviews]);

  return (
    <S.Container>
      <S.ReviewBoxs>
        {reviews?.slice((pageNum - 1) * 6, pageNum * 6).map((review) => (
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
