import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { IRecordProduct } from "../../interfaces/record";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const RecordProductInformation = ({ product }: { product: IRecordProduct }) => {
  const navigate = useNavigate();

  return (
    <S.ProductContainer>
      <S.ProductImageArea
        onClick={() => navigate(`/product/${product.productId}`)}
      >
        <AnimatePresence mode="wait">
          {product.images && (
            <S.ProductImage
              key={product.images}
              src={product.images.split("public")[1]}
              initial={{ opacity: 0.2, x: 30 }}
              transition={{ ease: "linear", duration: 0.2 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.2, x: -30 }}
            />
          )}
        </AnimatePresence>
      </S.ProductImageArea>
      <S.ProductName onClick={() => navigate(`/product/${product.productId}`)}>
        {product.name}
      </S.ProductName>
    </S.ProductContainer>
  );
};

export default RecordProductInformation;
