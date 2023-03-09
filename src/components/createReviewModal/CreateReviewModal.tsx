import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
import { useRecoilValue } from "recoil";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";

function CreateReviewModal({
  setModalOpen,
  product,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProductDetail | undefined;
}) {
  const loggedInInfo = useRecoilValue<ILoggedInAtom>(loggedInAtom);
  const handleXClick = () => setModalOpen(false);
  return (
    <S.ModalBg>
      <S.Modal>
        <S.SubmitBtn>등록</S.SubmitBtn>
        <S.XBtn onClick={handleXClick}>X</S.XBtn>
        <S.Containers>
          <S.Container>
            <S.ImgContainer></S.ImgContainer>
            <S.ProductName>{product?.name}</S.ProductName>
            <S.ReviewText>
              리뷰 작성
              <S.ReviewTextarea />
            </S.ReviewText>
          </S.Container>
          <S.Container>
            <S.UserInfoBox>
              <S.UserImage src="/images/profileImg/defaultProfileImg.png" />
              <S.UserName>{loggedInInfo.id}</S.UserName>
            </S.UserInfoBox>
            <S.Rating>
                별점
            </S.Rating>
          </S.Container>
        </S.Containers>
      </S.Modal>
    </S.ModalBg>
  );
}
export default CreateReviewModal;
