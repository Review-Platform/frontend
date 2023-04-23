import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { IRecordProduct, ITopReviewProduct } from "../../interfaces/record";
import { AnimatePresence } from "framer-motion";

const RecordProductInformation = ({
  product,
  big,
}: {
  big: boolean;
  product: IRecordProduct;
}) => {
  const navigate = useNavigate();

  return (
    <S.ProductContainer big={big}>
      <S.ProductImageArea
        big={big}
        onClick={() => navigate(`/product/${product.productId}`)}
      >
        <AnimatePresence mode="wait">
          {product.images && (
            <S.ProductImage
              big={big}
              key={product.images}
              src={product.images.split("public")[1]}
              initial={{ opacity: 0.2, x: 30 }}
              transition={{ ease: "linear", duration: 0.2 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.2, x: -30 }}
            />
          )}
        </AnimatePresence>
      </S.ProductImageArea>
      <S.ProductName onClick={() => navigate(`/product/${product.productId}`)}>
        {product.name}
      </S.ProductName>
    </S.ProductContainer>
  );
};

export default RecordProductInformation;
