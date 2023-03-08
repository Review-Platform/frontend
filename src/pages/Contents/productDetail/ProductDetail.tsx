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
          <S.ImgContainer></S.ImgContainer>
          <S.InfoContainer>
            <S.InfoBrandName>농심</S.InfoBrandName>
            <S.InfoProductName>농심 포테토칩 사워크림어니언</S.InfoProductName>
            <Rating rating={3.1} />
          </S.InfoContainer>
        </S.DetailContainer>
      </S.MainWrapper>
    </ContentsWrapper>
  );
}
export default ProductDetail;
