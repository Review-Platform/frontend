import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductContainer = styled(motion.div)`
  width: 295px;
  height: 242px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffb001;
  border-radius: 5px;
`;

export const ProductImageArea = styled.div`
  margin-top: 12px;
  width: 269.66px;
  height: 170.45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/images/productBackground.png");
  background-size: cover;
  cursor: pointer;
`;

export const ProductImage = styled(motion.img)`
  width: 166.68px;
  height: 145.2px;
`;

export const ProductName = styled.div`
  margin-top: 17.6px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: white;
  cursor: pointer;
`;
