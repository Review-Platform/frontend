import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductContainer = styled(motion.div)<{ big: boolean }>`
  width: ${(props) => (props.big ? "295px" : "280px")};
  height: ${(props) => (props.big ? "242px" : "230px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffb001;
  border-radius: 5px;
`;

export const ProductImageArea = styled.div<{ big: boolean }>`
  margin-top: 12px;
  width: ${(props) => (props.big ? "269.66px" : "256px")};
  height: ${(props) => (props.big ? "170.45px" : "162px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/images/productBackground.png");
  background-size: cover;
  cursor: pointer;
`;

export const ProductImage = styled(motion.img)<{ big: boolean }>`
  width: ${(props) => (props.big ? "166.68px" : "158.24px")};
  height: ${(props) => (props.big ? "145.2px" : "138px")};
`;

export const ProductName = styled.div`
  margin-top: 17.6px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: white;
  cursor: pointer;
`;
