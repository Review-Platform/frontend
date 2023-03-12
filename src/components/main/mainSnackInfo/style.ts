import styled from "styled-components";

export const SnackInfo = styled.div`
  display: flex;
  width: 45%;
  border: 2px solid #ff8a3b;
  border-radius: 15px;
  background-color: white;
  margin-right: 15px;
`;

export const SnackArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
`;

export const SnackImg = styled.img`
  height: 80%;
`;

export const SnackName = styled.span``;

export const ProfileArea = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  background-color: #ffc107;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const RateArea = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

export const RateLeftText = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

export const RateRightText = styled(RateLeftText)`
  color: #ffc107;
  margin-left: 5px;
`;

export const RateImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const HashTagArea = styled.div`
  height: 20%;
`;

export const HashTag = styled.span`
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px;
  font-size: 15px;
  margin: 0 10px 10px 0;
`;

export const ReviewText = styled.span`
  height: 30%;
  font-size: 15px;
`;

export const ReviewArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 5% 0;
`;
