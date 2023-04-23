import styled from "styled-components";

export const Stars = styled.div<{ size: number }>`
  width: auto;
  height: ${(props) => props.size}px;
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

export const FilledStar = styled.svg<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: rgba(255, 172, 51, 1);
`;
export const HalfStar = styled.svg<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: rgba(255, 172, 51, 1);
`;
export const EmptyStar = styled.svg<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: rgba(255, 172, 51, 1);
`;

export const RatingNumber = styled.span`
  font-weight: 500;
  font-size: 12.12px;
  line-height: 15px;
  color: rgba(113, 113, 113, 1);
  margin-left: 6px;
`;
