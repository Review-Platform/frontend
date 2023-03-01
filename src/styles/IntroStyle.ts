import styled from "styled-components";

export const IntroArea = styled.div`
  display: flex;
  background-color: #ffefdf;
  border-top: 2px solid #ff8a3b;
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
  src: require("../imgs/Artboard14.png"),
})`
  height: 100%;
  width: 50%;
`;

export const IntroImg = styled.img`
  height: 50%;
`;

export const TextLogo = styled.img.attrs({
  src: require("../imgs/TextLogo.png"),
})`
  margin-bottom: 15px;
  height: 40px;
  width: 270px;
`;

export const IntroTextTop = styled.span`
  color: #ff8a3b;
`;

export const IntroText = styled.span`
  margin: 8px 0;
`;

export const IntroBottom = styled.img.attrs({
  src: require("../imgs/IntroBottom.png"),
})`
  width: 100%;
`;
