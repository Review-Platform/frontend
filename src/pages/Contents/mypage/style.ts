import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export const MyPageContainer = styled.div`
  width: 840px;
`;
export const MyPageArea = styled.div``;

export const ReviewArea = styled.div`
  height: auto;
  min-height: 400px;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: #ff2617;
  margin-bottom: 18px;
  margin-top: 54px;
  font-weight: 700;
`;

export const MyImage = styled.img`
  width: 118px;
  height: 118px;
  border-radius: 10px;
  margin-right: 30px;
`;

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #191919;
  margin-bottom: 14px;
`;

export const MyNickName = styled.span`
  font-size: 18px;
  margin-bottom: 12px;
`;

export const MyEmail = styled.span`
  font-size: 18px;
  margin-bottom: 14px;
`;

export const InfoModifyArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InfoModifyText = styled.span`
  font-size: 14px;
  color: #e76100;
`;

export const InfoModifyIcon = styled(AiOutlineRight)`
  color: #e76100;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TotalInfoArea = styled.div`
  display: flex;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 50px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  color: #ff2617;
  margin-bottom: 18px;
  margin-top: 30px;
  font-weight: 500;
`;
