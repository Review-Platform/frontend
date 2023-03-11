import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductInfo } from "../../interfaces/productInfo";
import { RateImg } from "../../styles/MainSnackInfoStyles";
import {
  ProductBackgroundImage,
  ProductContainer,
  ProductImage,
  ProductImageArea,
  ProductInfo,
  ProductName,
  ProductNameArea,
  ProductRating,
  RateText,
} from "../../styles/ProductStyles";

const ProductInformation = ({ product }: { product: IProductInfo }) => {
  const navigate = useNavigate();
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductImageArea onClick={() => navigate(`/product/${product.id}`)}>
          <ProductBackgroundImage
            src={require("../../imgs/background/productBackground.png")}
          ></ProductBackgroundImage>
          <ProductImage src={`${product.originPath}`} />
        </ProductImageArea>
        <ProductNameArea>
          <ProductName onClick={() => navigate(`/product/${product.id}`)}>
            {product.name}
          </ProductName>
        </ProductNameArea>
      </ProductInfo>
      <ProductRating>
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
      </ProductRating>
    </ProductContainer>
  );
};

export default ProductInformation;
