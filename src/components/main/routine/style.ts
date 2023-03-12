import styled from "styled-components";

export const RoutineArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15vw;
  margin: 0 0 10vh 0;
`;

export const RoutineTopArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh 0;
`;

export const RoutineBottomArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RoutineTextLogo = styled.img`
  height: 42px;
  width: 400px;
  margin-bottom: 20px;
`;

export const RoutineText = styled.span`
  font-size: 16px;
`;

export const Card = styled.div`
  background-color: brown;
  height: 400px;
  width: 270px;
  border: 1.5px solid #d3651b;
`;

export const CardImgArea = styled.div`
  position: relative;
  height: 60%;
  background-color: blue;
`;

export const CardTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  background-color: #ffe9cf;
`;

export const CardBgImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const CardTextTitle = styled.span`
  color: #f84902;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const CardText = styled.span`
  max-width: 75%;
  font-size: 15px;
  line-height: 140%;
`;

export const CardSnackImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
