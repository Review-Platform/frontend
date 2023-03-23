import Rating from "../rating/Rating";
import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
import { useState } from "react";
import CreateReviewModal from "../createReviewModal/CreateReviewModal";
import { useRecoilValue } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";
function ProductDetailContainer({
  product,
}: {
  product: IProductDetail | undefined;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const loggedInInfo = useRecoilValue<ILoggedInAtom>(loggedInAtom);
  const handleCreateReviewClick = () => {
    if (loggedInInfo.loggedIn) {
      setModalOpen(true);
    } else {
      alert("로그인 후 이용해주세요.");
    }
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
          <Rating
            rating={product?.avg_grade ? product.avg_grade : 0}
            size={13}
          />
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
