import * as S from "./style";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useParams } from "react-router-dom";
import { IProductDetail } from "../../../interfaces/productDetail";
import useProductDetail from "../../../hooks/useProductDetail";
import ReviewBox from "../../../components/reviewBox/ReviewBox";
import ReviewBoxContainer from "../../../components/reviewBoxContainer/ReviewBoxContainer";

function ProductDetail() {
  const { id } = useParams();
  const { product, productReviews, timeOrderArr, likeOrderArr } =
    useProductDetail(Number(id));
  return (
    <S.MainWrapper>
      <ProductDetailContainer product={product} />
      <S.ReviewsSpan>다른 리뷰글</S.ReviewsSpan>
      {/* <S.ReviewBoxs>
        {product?.reviews?.map((review) => (
          <ReviewBox key={review.reviewId} product={product} review={review} />
        ))}
      </S.ReviewBoxs> */}
      <ReviewBoxContainer
        reviews={productReviews}
        timeOrderArr={timeOrderArr}
        likeOrderArr={likeOrderArr}
        product={product}
      />
    </S.MainWrapper>
  );
}
export default ProductDetail;
