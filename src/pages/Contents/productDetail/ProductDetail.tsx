import * as S from "./style";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useParams } from "react-router-dom";
import { IProductDetail } from "../../../interfaces/productDetail";
import useProductDetail from "../../../hooks/useProductDetail";

function ProductDetail() {
  const { id } = useParams();
  const product: IProductDetail = useProductDetail(Number(id));
  console.log(product);
  return (
    <S.MainWrapper>
      <ProductDetailContainer product={product} />
    </S.MainWrapper>
  );
}
export default ProductDetail;
