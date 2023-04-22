import { useNavigate } from "react-router-dom";
import { IProductInfo } from "../../interfaces/productInfo";
import * as S from "./style";

const ProductInformation = ({ product }: { product: IProductInfo }) => {
  const navigate = useNavigate();
  return (
    <S.ProductContainer>
      <S.ProductInfo>
        <S.ProductImageArea onClick={() => navigate(`/product/${product.id}`)}>
          <S.ProductBackgroundImage
            src={require("../../imgs/background/productBackground.png")}
          ></S.ProductBackgroundImage>
          <S.ProductImage src={`/images/productImg/${product.name}.jpg`} />
        </S.ProductImageArea>
        <S.ProductNameArea>
          <S.ProductName onClick={() => navigate(`/product/${product.id}`)}>
            {product.name}
          </S.ProductName>
        </S.ProductNameArea>
      </S.ProductInfo>
    </S.ProductContainer>
  );
};

export default ProductInformation;
