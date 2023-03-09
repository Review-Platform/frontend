import Rating from "../rating/Rating";
import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
function ProductDetailContainer({
  product,
}: {
  product: IProductDetail | undefined;
}) {
  console.log(product);
  return (
    <S.DetailContainer>
      <S.ImgContainer>
        <S.Img src={product?.originPath} />
      </S.ImgContainer>
      <S.InfoContainer>
        <S.InfoBrandName>농심</S.InfoBrandName>
        <S.InfoProductName>{product?.name}</S.InfoProductName>
        <Rating rating={product?.rating ? product.rating : 0} />
        <S.CreateReviewBtn>리뷰작성하기</S.CreateReviewBtn>
        <S.InfoCalorie>
          <S.CalorieTitle>칼로리</S.CalorieTitle>
          <S.Calorie>{product?.kcal}Kcal</S.Calorie>
        </S.InfoCalorie>
        <S.InfoHashtags>
          <S.HashtagsTitle>추천 해시태그</S.HashtagsTitle>
          <S.Hashtags></S.Hashtags>
        </S.InfoHashtags>
      </S.InfoContainer>
    </S.DetailContainer>
  );
}
export default ProductDetailContainer;
