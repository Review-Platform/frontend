import * as S from "./style";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useParams } from "react-router-dom";
import useProductDetail from "../../../hooks/useProductDetail";
import ReviewBoxContainerHorizontal from "../../../components/reviewBoxContainer/horizontal/ReviewBoxContainerHorizontal";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { product, productReviews, timeOrderArr, likeOrderArr } =
    useProductDetail(Number(id));
  const [length, setLength] = useState(0);
  useEffect(() => {
    setLength(productReviews?.length);
  }, [productReviews]);
  return (
    <S.MainWrapper>
      <ProductDetailContainer product={product} />
      {length === 0 ? null : (
        <>
          <S.ReviewsSpan>다른 리뷰글</S.ReviewsSpan>
          <ReviewBoxContainerHorizontal
            reviews={productReviews}
            timeOrderArr={timeOrderArr}
            likeOrderArr={likeOrderArr}
            product={product}
          />
        </>
      )}
    </S.MainWrapper>
  );
}
export default ProductDetail;
