import { IReview } from "../../../interfaces/review";
import * as S from "./style";
import { IProductDetail } from "../../../interfaces/productDetail";
import Rating from "../../rating/Rating";
import Hashtag from "../hashtag/Hashtag";
import useGetFlavors from "../../../hooks/useGetFlavors";
import { deleteLikeReview, likeReview } from "../../../apis/api/reviewApi";
import { loggedInAtom } from "../../../atoms/loggedInAtom";
import { useRecoilValue } from "recoil";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
function ReviewBoxHorizontal({
  review,
  product,
}: {
  review: IReview;
  product: IProductDetail | null;
}) {
  const queryClient = useQueryClient();
  const loggedInInfo = useRecoilValue(loggedInAtom);
  const flavorArr = useGetFlavors(review.flavor); //맛 정보 데이터 가공하는 훅

  const { mutateAsync: likeCancelMutate } = useMutation(deleteLikeReview, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["AllReviews"]);
      await queryClient.invalidateQueries(["product", product?.id]);
      console.log("추천 취소 성공");
    },
  });
  const { mutateAsync: likeMutate } = useMutation(likeReview, {
    onError: async () => await likeCancelMutate(review.reviewId),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["AllReviews"]);
      await queryClient.invalidateQueries(["product", product?.id]);
      console.log("추천 성공");
    },
  });

  const handleLikeClick = async () => {
    if (loggedInInfo.loggedIn) {
      await likeMutate(review.reviewId);
    } else {
      alert("로그인 후 이용해주세요.");
    }
  };
  console.log(product?.localPath.split("public")[1]);
  return (
    <S.Box>
      <S.LeftContainer>
        {product ? (
          <S.ReviewImg
            src={
              review.reviewImages?.length
                ? `/images/reviewImg/${review.reviewImages[0]?.storedName}`
                : `${product.localPath.split("public")[1]}`
            }
          />
        ) : (
          <S.ReviewImg
            src={
              review.reviewImages?.length
                ? `/images/reviewImg/${review.reviewImages[0]?.storedName}`
                : `${review.product?.localPath.split("public")[1]}`
            }
          />
        )}
        <S.ReviewProductName>{review.product?.name}</S.ReviewProductName>
      </S.LeftContainer>

      <S.CenterContainer>
        <S.UserInfoContainer>
          <S.UserImage
            src={require("../../../imgs/profileImg/defaultProfileImg.png")}
          />
          <S.UserName>{review.user.userId}</S.UserName>
        </S.UserInfoContainer>
        <S.RatingContainer>
          <S.RatingTitle>평점</S.RatingTitle>
          <Rating rating={review.grade} size={16} />
        </S.RatingContainer>
        <S.RecommendContainer>
          <S.ThumbIcon src={require("../../../imgs/reviewBoxImg/thumb.png")} />
          <S.RecommendNumber>
            {review.reviewLikeCount ? review.reviewLikeCount : 0}
          </S.RecommendNumber>
          <S.RecommendBtn onClick={handleLikeClick}>추천하기</S.RecommendBtn>
        </S.RecommendContainer>
        <S.ReviewText>{review.content}</S.ReviewText>
      </S.CenterContainer>

      <S.RightContainer>
        <S.FlavorContainer>
          <S.FlavorTitle>맛 평가</S.FlavorTitle>
          <S.Flavors>
            {flavorArr.map((flavor) => (
              <S.FlavorItem key={flavor.flavor}>
                <S.FlavorName>{flavor.flavor}</S.FlavorName>
                <S.FlavorLevel>{flavor.level}</S.FlavorLevel>
              </S.FlavorItem>
            ))}
          </S.Flavors>
        </S.FlavorContainer>
        <S.HashtagContainer>
          <S.HashtagTitle>추천 해시태그</S.HashtagTitle>
          <S.HashtagsRow>
            {review.tagNames.slice(0, 4).map((name, index) => (
              <Hashtag key={index} name={name} reviewBox={true} />
            ))}
          </S.HashtagsRow>
          <S.HashtagsRow>
            {review.tagNames.slice(4, 8).map((name, index) => (
              <Hashtag key={index} name={name} reviewBox={true} />
            ))}
          </S.HashtagsRow>
        </S.HashtagContainer>
      </S.RightContainer>
    </S.Box>
  );
}
export default React.memo(ReviewBoxHorizontal);
