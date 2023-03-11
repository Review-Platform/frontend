import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12vw;
  height: 450px;
  margin-top: 5vh;
`;

const TextArea = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const RoutineTextLogo = styled.img`
  height: 100%;
  width: 400px;
`;

const RoutineText = styled.span`
  color: #7a4c00;
  font-weight: bold;
  width: 25vw;
  line-height: 150%;
  margin-left: 2vw;
`;

const ImgArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
`;

const Img = styled.img`
  height: 100%;
  width: 18%;
  background-color: red;
`;

const BottomArea = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #ff8a3b;
`;

const Footer = () => {
  return (
    <FooterArea>
      <ContentArea>
        <TextArea>
          <RoutineTextLogo src={require("../../imgs/SnackOfRoutine2.png")} />
          <RoutineText>
            스낵빌리지는 단 하루를 생각하더라도 조금 더 즐거운 순간을 추억 할 줄
            아는 여러분들의 생활을 응원합니다.
          </RoutineText>
        </TextArea>
        <ImgArea>
          <Img src={require("../../imgs/Footer1.png")} />
          <Img src={require("../../imgs/Footer2.png")} />
          <Img src={require("../../imgs/Footer3.png")} />
          <Img src={require("../../imgs/Footer4.png")} />
          <Img src={require("../../imgs/Footer5.png")} />
        </ImgArea>
      </ContentArea>
      <BottomArea></BottomArea>
    </FooterArea>
  );
};

export default Footer;
