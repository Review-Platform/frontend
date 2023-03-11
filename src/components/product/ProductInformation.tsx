import React from "react";
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

const ProductInformation = () => {
  return (
    <ProductContainer>
      <ProductInfo>
        <ProductImageArea>
          <ProductBackgroundImage
            src={require("../../imgs/background/productBackground.png")}
          ></ProductBackgroundImage>
          <ProductImage src={require("../../imgs/Cheetos.png")} />
        </ProductImageArea>
        <ProductNameArea>
          <ProductName>치토스</ProductName>
        </ProductNameArea>
      </ProductInfo>
      <ProductRating>
        <RateImg src={require("../../imgs/FullStar.png")} />
        <RateImg src={require("../../imgs/FullStar.png")} />
        <RateImg src={require("../../imgs/FullStar.png")} />
        <RateImg src={require("../../imgs/FullStar.png")} />
        <RateImg src={require("../../imgs/FullStar.png")} />
        <RateText>5/5</RateText>
      </ProductRating>
    </ProductContainer>
  );
};

export default ProductInformation;
