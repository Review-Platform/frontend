import styled from "styled-components";
export const Container = styled.div`
  width: 500px;
  height: 865px;
  min-height: 740px;
  background-color: #fffaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 182.9px;
  height: 88px;
  margin-top: 160px;
`;

export const Congratulations = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 30px;
  color: #ff4a00;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #191919;
  margin-top: 16px;
  &:last-child {
    margin-top: 3px;
  }
`;

export const HomeBtn = styled.button`
  margin-top: 70px;
  width: 270px;
  height: 50px;
  border-radius: 40px;
  background-color: var(--orangeColor);
  border: none;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;
