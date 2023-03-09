import Rating from "../rating/Rating";
import * as S from "./style";
function ProductDetailContainer() {
  return (
    <S.DetailContainer>
      <S.ImgContainer>
        <S.Img src="/images/example.png" />
      </S.ImgContainer>
      <S.InfoContainer>
        <S.InfoBrandName>농심</S.InfoBrandName>
        <S.InfoProductName>농심 포테토칩 사워크림어니언</S.InfoProductName>
        <Rating rating={3.2} />
        <S.CreateReviewBtn>리뷰작성하기</S.CreateReviewBtn>
        <S.InfoCalorie>
          <S.CalorieTitle>칼로리</S.CalorieTitle>
          <S.Calorie>345Kcal</S.Calorie>
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
