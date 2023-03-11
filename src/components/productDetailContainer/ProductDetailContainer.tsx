import Rating from "../rating/Rating";
import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
import { useState } from "react";
import CreateReviewModal from "../createReviewModal/CreateReviewModal";
function ProductDetailContainer({
  product,
}: {
  product: IProductDetail | undefined;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCreateReviewClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <S.DetailContainer>
        <S.ImgContainer>
          <S.Img src={product?.originPath} />
        </S.ImgContainer>
        <S.InfoContainer>
          <S.InfoBrandName>{product?.brand}</S.InfoBrandName>
          <S.InfoProductName>{product?.name}</S.InfoProductName>
          <Rating rating={product?.rating ? product.rating : 0} />
          <S.CreateReviewBtn onClick={handleCreateReviewClick}>
            리뷰작성하기
          </S.CreateReviewBtn>
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
      {modalOpen ? (
        <CreateReviewModal product={product} setModalOpen={setModalOpen} />
      ) : null}
    </>
  );
}
export default ProductDetailContainer;
