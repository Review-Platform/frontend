import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
import { useRecoilValue } from "recoil";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { ILoggedInAtom, loggedInAtom } from "../../atoms/loggedInAtom";
import StarRadio from "../inputs/starRadio/StarRadio";
import FlavorRadio from "../inputs/flavorRadio/FlavorRadio";
import HashtagCheckbox from "../inputs/hashtag/HashtagCheckbox";
import { ICreateReviewForm } from "../../interfaces/createReviewForm";
import { useCreateReview } from "../../hooks/useCreateReview";
import ReviewImage from "../inputs/reviewImage/ReviewImage";

function CreateReviewModal({
  setModalOpen,
  product,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProductDetail | undefined;
}) {
  const handleCreateReview = useCreateReview();
  const loggedInInfo = useRecoilValue<ILoggedInAtom>(loggedInAtom);
  const handleXClick = () => setModalOpen(false);
  const methods = useForm<ICreateReviewForm>();
  const onValid = (createReviewForm: ICreateReviewForm) => {
    handleCreateReview({ createReviewForm, product });
  };
  return (
    <S.ModalBg>
      <FormProvider {...methods}>
        <S.Modal onSubmit={methods.handleSubmit(onValid)}>
          <S.SubmitBtn>등록</S.SubmitBtn>
          <S.XBtn onClick={handleXClick}>X</S.XBtn>
          <S.Containers>
            <S.Container>
              <S.ImgContainer>
                <ReviewImage product={product} />
              </S.ImgContainer>
              <S.ProductName>{product?.name}</S.ProductName>
              <S.ReviewText>
                리뷰 작성
                <S.ReviewTextarea {...methods.register("content")} />
              </S.ReviewText>
            </S.Container>
            <S.Container>
              <S.UserInfoBox>
                <S.UserImage
                  src={require("../../imgs/profileImg/defaultProfileImg.png")}
                />
                <S.UserName>{loggedInInfo.id}</S.UserName>
              </S.UserInfoBox>
              <S.Rating>
                별점
                <StarRadio />
              </S.Rating>
              <S.FlavorCheck>
                내 입맛 체크
                <FlavorRadio />
              </S.FlavorCheck>
              <S.HashTags>
                추천 해시태그
                <HashtagCheckbox />
              </S.HashTags>
            </S.Container>
          </S.Containers>
        </S.Modal>
      </FormProvider>
    </S.ModalBg>
  );
}
export default CreateReviewModal;
