import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import { useEffect } from "react";
import { getLoggedInInfo } from "../api/accountApi";

const IntroArea = styled.div`
  display: flex;
  background-color: #ffefdf;
  border-top: 2px solid #ff8a3b;
  height: 340px;
  width: 100vw;
`;

const IntroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  width: 60%;
`;

const IntroImgArea = styled.div`
  display: flex;
  width: 40%;
`;

const IntroImgLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const IntroImgRight = styled.img.attrs({
  src: require("../imgs/Artboard14.png"),
})`
  height: 100%;
  width: 50%;
`;

const IntroImg = styled.img`
  height: 50%;
`;

const TextLogo = styled.img.attrs({
  src: require("../imgs/TextLogo.png"),
})`
  margin-bottom: 15px;
  height: 40px;
  width: 270px;
`;

const IntroTextTop = styled.span`
  color: #ff8a3b;
`;

const IntroText = styled.span`
  margin: 8px 0;
`;

function Home() {
  useEffect(() => {
    getLoggedInInfo().then((res) => console.log(res));
  }, []);
  return (
    <>
      <MainHeader />
      <IntroArea>
        <IntroTextArea>
          <TextLogo />
          <IntroTextTop>Snack of routine_ snack village.</IntroTextTop>
          <IntroText>
            스낵빌리지는 일상 속에 함께하는 모든 경우의 간식 타임을 어떤 이유로,
            어떤 방식으로든 즐기는 사람들을 위해 시작한 국내 과자 레코드
            플랫폼입니다.
          </IntroText>
          <IntroText>
            여러분들이 직접 참여한 모든 국내 과자 리뷰들을 통해 스낵빌리지는
            한층 더 즐거운 시간을 추억할 수 있도록, 스낵 어워드, 스낵 추천, 스낵
            레코드 등 다양한 서비스를 제공합니다.
          </IntroText>
        </IntroTextArea>
        <IntroImgArea>
          <IntroImgLeft>
            <IntroImg src={require("../imgs/Artboard12.png")} />
            <IntroImg src={require("../imgs/Artboard13.png")} />
          </IntroImgLeft>
          <IntroImgRight />
        </IntroImgArea>
      </IntroArea>
    </>
  );
}
export default Home;
