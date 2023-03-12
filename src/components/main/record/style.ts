import styled from "styled-components";
export const RecordReviewArea = styled.div`
  display: flex;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 72%;
  background-color: #ffefdf;
`;

export const RecordArea = styled.div`
  display: flex;
  height: 40%;
`;

export const RecordLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;
  width: 65%;
  border-right: 2px solid #ffce88;
  border-bottom: 2px solid #ffce88;
`;

export const RecordTextImg = styled.img`
  height: 40px;
  width: 310px;
`;

export const RecordLeftText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

export const RecordRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3vw;
  width: 35%;
  border-bottom: 2px solid #ffce88;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  padding-left: 10vw;
`;

export const ImgArea = styled.img`
  width: 28%;
  height: 800px;
`;

export const ReviewTextImg = styled.img`
  height: 40px;
  width: 170px;
  margin-bottom: 10px;
`;

export const RecordText = styled.span`
  margin: 5px 0;
  line-height: 150%;
`;

export const SnackInfoArea = styled.div`
  height: 50%;
  margin-top: 2vh;
  display: flex;
`;

export const SnackInfo = styled.div`
  width: 45%;
  border: 2px solid #ff8a3b;
  border-radius: 15px;
  background-color: white;
  margin-right: 15px;
`;

export const NavArea = styled.div`
  display: flex;
  align-items: center;
  margin: 2vh 0;
  cursor: pointer;
`;

export const NavText = styled.span`
  color: gray;
`;

export const NavIcon = styled.img`
  width: 20px;
  height: 18px;
  margin-left: 5px;
`;
