import * as S from "./style";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useParams } from "react-router-dom";
import { IProductDetail } from "../../../interfaces/productDetail";
import useProductDetail from "../../../hooks/useProductDetail";
import ReviewBox from "../../../components/reviewBox/ReviewBox";

function ProductDetail() {
  const { id } = useParams();
  const product: IProductDetail = useProductDetail(Number(id));
  console.log(product);
  return (
    <S.MainWrapper>
      <ProductDetailContainer product={product} />
      <S.ReviewsSpan>다른 리뷰글</S.ReviewsSpan>
      <S.ReviewBoxs>
        {product?.reviews?.map((review) => (
          <ReviewBox product={product} review={review} />
        ))}
      </S.ReviewBoxs>
    </S.MainWrapper>
  );
}
export default ProductDetail;
