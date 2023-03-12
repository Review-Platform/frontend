import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductInfo } from "../../interfaces/productInfo";
import * as S from "./style";

const ProductInformation = ({ product }: { product: IProductInfo }) => {
  const navigate = useNavigate();
  return (
    <S.ProductContainer>
      <S.ProductInfo>
        <S.ProductImageArea onClick={() => navigate(`/product/${product.id}`)}>
          <S.ProductBackgroundImage
            src={require("../../imgs/background/productBackground.png")}
          ></S.ProductBackgroundImage>
          <S.ProductImage src={`${product.originPath}`} />
        </S.ProductImageArea>
        <S.ProductNameArea>
          <S.ProductName onClick={() => navigate(`/product/${product.id}`)}>
            {product.name}
          </S.ProductName>
        </S.ProductNameArea>
      </S.ProductInfo>
      <S.ProductRating>
        {/* {product.grade >= 1 ? (
          <RateImg src={require("../../imgs/FullStar.png")} />
        ) : product.grade >= 0.5 ? (
          <RateImg src={require("../../imgs/HalfStar.png")} />
        ) : (
          <RateImg src={require("../../imgs/EmptyStar.png")} />
        )}
        {product.grade >= 2 ? (
          <RateImg src={require("../../imgs/FullStar.png")} />
        ) : product.grade >= 1.5 ? (
          <RateImg src={require("../../imgs/HalfStar.png")} />
        ) : (
          <RateImg src={require("../../imgs/EmptyStar.png")} />
        )}

        {product.grade >= 3 ? (
          <RateImg src={require("../../imgs/FullStar.png")} />
        ) : product.grade >= 2.5 ? (
          <RateImg src={require("../../imgs/HalfStar.png")} />
        ) : (
          <RateImg src={require("../../imgs/EmptyStar.png")} />
        )}

        {product.grade >= 4 ? (
          <RateImg src={require("../../imgs/FullStar.png")} />
        ) : product.grade >= 3.5 ? (
          <RateImg src={require("../../imgs/HalfStar.png")} />
        ) : (
          <RateImg src={require("../../imgs/EmptyStar.png")} />
        )}

        {product.grade >= 5 ? (
          <RateImg src={require("../../imgs/FullStar.png")} />
        ) : product.grade >= 4.5 ? (
          <RateImg src={require("../../imgs/HalfStar.png")} />
        ) : (
          <RateImg src={require("../../imgs/EmptyStar.png")} />
        )}

        <RateText>{product.grade}/5</RateText> */}
      </S.ProductRating>
    </S.ProductContainer>
  );
};

export default ProductInformation;
