import { ContentsWrapper } from "../../../styles/ContentsStyles";
import * as S from "./style";
import styled from "styled-components";
import Rating from "../../../components/rating/Rating";

function ProductDetail() {
  return (
    <ContentsWrapper>
      <S.MainWrapper>
        <S.Title>Review {">"} Record</S.Title>
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
      </S.MainWrapper>
    </ContentsWrapper>
  );
}
export default ProductDetail;
