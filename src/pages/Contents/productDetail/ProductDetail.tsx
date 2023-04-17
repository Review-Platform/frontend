import * as S from "./style";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useParams } from "react-router-dom";
import useProductDetail from "../../../hooks/useProductDetail";
import ReviewBox from "../../../components/reviewBox/horizontal/ReviewBoxHorizontal";
import ReviewBoxContainer from "../../../components/reviewBoxContainer/ReviewBoxContainer";

function ProductDetail() {
  const { id } = useParams();
  const { product, productReviews, timeOrderArr, likeOrderArr } =
    useProductDetail(Number(id));
  return (
    <S.MainWrapper>
      <ProductDetailContainer product={product} />
      <S.ReviewsSpan>다른 리뷰글</S.ReviewsSpan>
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
