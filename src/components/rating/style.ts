import styled from "styled-components";

export const Stars = styled.div`
  width: auto;
  height: 22px;
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

export const FilledStar = styled.svg`
  width: auto;
  height: 13px;
  fill: rgba(255, 172, 51, 1);
`;
export const HalfStar = styled.svg`
  width: 20px;
  height: 13px;
  fill: rgba(255, 172, 51, 1);
`;
export const EmptyStar = styled.svg`
  width: 20px;
  height: 13px;
  fill: rgba(255, 172, 51, 1);
`;

export const RatingNumber = styled.span`
  font-weight: 500;
  font-size: 12.12px;
  line-height: 15px;
  color: rgba(113, 113, 113, 1);
  margin-left: 6px;
`;
