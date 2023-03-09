import { ContentsWrapper } from "../../../styles/ContentsStyles";
import * as S from "./style";
import styled from "styled-components";
import Rating from "../../../components/rating/Rating";
import ProductDetailContainer from "../../../components/productDetailContainer/ProductDetailContainer";
import { useQuery } from 'react-query';

function ProductDetail() {
  return (
    <ContentsWrapper>
      <S.MainWrapper>
        <S.Title>Review {">"} Record</S.Title>
        <ProductDetailContainer />
      </S.MainWrapper>
    </ContentsWrapper>
  );
}
export default ProductDetail;
