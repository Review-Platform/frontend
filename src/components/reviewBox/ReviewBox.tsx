import { IReview } from "../../interfaces/review";
import * as S from "./style";
import { IProductDetail } from "../../interfaces/productDetail";
import Rating from "../rating/Rating";
import Hashtag from "../hashtag/Hashtag";
function ReviewBox({
  review,
  product,
}: {
  review: IReview;
  product: IProductDetail;
}) {
  return (
    <S.Box>
      <S.LeftContainer>
        {review.reviewImages?.length ? (
          <S.ReviewImg
            src={require(`../../imgs/reviewImg/${review.reviewImages[0].storedName}`)}
          />
        ) : (
          <S.ReviewImg src={product.originPath} />
        )}
        <S.ReviewProductName>{product.name}</S.ReviewProductName>
      </S.LeftContainer>

      <S.CenterContainer>
        <S.UserInfoContainer>
          <S.UserImage
            src={require("../../imgs/profileImg/defaultProfileImg.png")}
          />
          <S.UserName>{review.user.userName}</S.UserName>
        </S.UserInfoContainer>
        <S.RatingContainer>
          <S.RatingTitle>평점</S.RatingTitle>
          <Rating rating={review.grade} size={16} />
        </S.RatingContainer>
        <S.RecommendContainer>
          <S.ThumbIcon src={require("../../imgs/reviewBoxImg/thumb.png")} />
          <S.RecommendNumber>10</S.RecommendNumber>
          <S.RecommendBtn>추천하기</S.RecommendBtn>
        </S.RecommendContainer>
        <S.ReviewText>{review.content}</S.ReviewText>
      </S.CenterContainer>

      <S.RightContainer>
        <S.FlavorContainer>
          <S.FlavorTitle>맛 평가</S.FlavorTitle>
          <S.Flavors>
            <S.FlavorItem>
              <S.FlavorName>짠맛</S.FlavorName>
              <S.FlavorLevel>강함</S.FlavorLevel>
            </S.FlavorItem>
            <S.FlavorItem>
              <S.FlavorName>단맛</S.FlavorName>
              <S.FlavorLevel>강함</S.FlavorLevel>
            </S.FlavorItem>
            <S.FlavorItem>
              <S.FlavorName>매운맛</S.FlavorName>
              <S.FlavorLevel>강함</S.FlavorLevel>
            </S.FlavorItem>
            <S.FlavorItem>
              <S.FlavorName>신맛</S.FlavorName>
              <S.FlavorLevel>강함</S.FlavorLevel>
            </S.FlavorItem>
          </S.Flavors>
        </S.FlavorContainer>
        <S.HashtagContainer>
          <S.HashtagTitle>추천 해시태그</S.HashtagTitle>
          <S.HashtagsRow>
            {review.tagNames.slice(0, 4).map((name) => (
              <Hashtag name={name} />
            ))}
          </S.HashtagsRow>
          <S.HashtagsRow>
            {review.tagNames.slice(4, 8).map((name) => (
              <Hashtag name={name} />
            ))}
          </S.HashtagsRow>
        </S.HashtagContainer>
      </S.RightContainer>
    </S.Box>
  );
}
export default ReviewBox;
