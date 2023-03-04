import React from "react";
import {
  IntroArea,
  BottomImg,
  IntroImg,
  IntroImgArea,
  IntroImgLeft,
  IntroImgRight,
  Text,
  IntroTextArea,
  TextTop,
  TextLogo,
} from "../../styles/IntroStyle";

const Introduction = () => {
  return (
    <>
      <IntroArea>
        <IntroTextArea>
          <TextLogo />
          <TextTop>Snack of routine_ snack village.</TextTop>
          <Text>
            스낵빌리지는 일상 속에 함께하는 모든 경우의 간식 타임을 어떤 이유로,
            어떤 방식으로든 즐기는 사람들을 위해 시작한 국내 과자 레코드
            플랫폼입니다.
          </Text>
          <Text>
            여러분들이 직접 참여한 모든 국내 과자 리뷰들을 통해 스낵빌리지는
            한층 더 즐거운 시간을 추억할 수 있도록, 스낵 어워드, 스낵 추천, 스낵
            레코드 등 다양한 서비스를 제공합니다.
          </Text>
        </IntroTextArea>
        <IntroImgArea>
          <IntroImgLeft>
            <IntroImg src={require("../../imgs/Artboard12.png")} />
            <IntroImg src={require("../../imgs/Artboard13.png")} />
          </IntroImgLeft>
          <IntroImgRight />
        </IntroImgArea>
      </IntroArea>
      <BottomImg />
    </>
  );
};

export default Introduction;
