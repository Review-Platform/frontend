import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterArea>
      <S.ContentArea>
        <S.TextArea>
          <S.RoutineTextLogo
            src={require("../../../imgs/mainPage/SnackOfRoutine2.png")}
          />
          <S.RoutineText>
            스낵빌리지는 단 하루를 생각하더라도 조금 더 즐거운 순간을 추억 할 줄
            아는 여러분들의 생활을 응원합니다.
          </S.RoutineText>
        </S.TextArea>
        <S.ImgArea>
          <S.Img src={require("../../../imgs/mainPage/Footer1.png")} />
          <S.Img src={require("../../../imgs/mainPage/Footer2.png")} />
          <S.Img src={require("../../../imgs/mainPage/Footer3.png")} />
          <S.Img src={require("../../../imgs/mainPage/Footer4.png")} />
          <S.Img src={require("../../../imgs/mainPage/Footer5.png")} />
        </S.ImgArea>
      </S.ContentArea>
      <S.BottomArea></S.BottomArea>
    </S.FooterArea>
  );
};

export default Footer;
