import styled from "styled-components";

export const IntroArea = styled.div`
  display: flex;
  background-color: #ffefdf;
  height: 400px;
  width: 100vw;
`;

export const IntroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  width: 60%;
`;

export const IntroImgArea = styled.div`
  display: flex;
  width: 40%;
`;

export const IntroImgLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

export const IntroImgRight = styled.img.attrs({
  src: require("../../../imgs/mainPage/Artboard14.png"),
})`
  height: 100%;
  width: 50%;
`;

export const IntroImg = styled.img`
  height: 50%;
`;

export const TextLogo = styled.img.attrs({
  src: require("../../../imgs/mainPage/TextLogo.png"),
})`
  height: 40px;
  width: 270px;
`;

export const TextTop = styled.span`
  color: #ff8a3b;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Text = styled.span`
  margin: 8px 0;
  line-height: 150%;
`;

export const BottomImg = styled.img.attrs({
  src: require("../../../imgs/mainPage/IntroBottom.png"),
})`
  width: 100%;
`;
