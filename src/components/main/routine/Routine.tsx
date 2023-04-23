import * as S from "./style";

const Routine = () => {
  return (
    <S.RoutineArea>
      <S.RoutineTopArea>
        <S.RoutineTextLogo
          src={require("../../../imgs/mainPage/SnackOfRoutine.png")}
        />
        <S.RoutineText>
          지금 이 순간에 가장 적합한 과자 종류들을 만나보세요.
        </S.RoutineText>
      </S.RoutineTopArea>
      <S.RoutineBottomArea>
        <S.Card>
          <S.CardImgArea>
            <S.CardBgImg
              src={require("../../../imgs/mainPage/CardBackground.png")}
            />
            <S.CardSnackImg
              src={require("../../../imgs/mainPage/Cheetos.png")}
            />
          </S.CardImgArea>
          <S.CardTextArea>
            <S.CardTextTitle>NORMAL</S.CardTextTitle>
            <S.CardText>
              그저 / 그냥 / 단순하게 끌려서 과자를 사먹을 예정이라면 이곳을
              확인해보세요!
            </S.CardText>
          </S.CardTextArea>
        </S.Card>
        <S.Card>
          <S.CardImgArea>
            <S.CardBgImg
              src={require("../../../imgs/mainPage/CardBackground.png")}
            />
            <S.CardSnackImg
              src={require("../../../imgs/mainPage/AirPotato.png")}
            />
          </S.CardImgArea>
          <S.CardTextArea>
            <S.CardTextTitle>FEEL</S.CardTextTitle>
            <S.CardText>
              파티 / 분위기 / 기분에 맞는 과자를 원하신다면 이런 과자는
              어떠세요?
            </S.CardText>
          </S.CardTextArea>
        </S.Card>
        <S.Card>
          <S.CardImgArea>
            <S.CardBgImg
              src={require("../../../imgs/mainPage/CardBackground.png")}
            />
            <S.CardSnackImg
              src={require("../../../imgs/mainPage/Pepero.png")}
            />
          </S.CardImgArea>
          <S.CardTextArea>
            <S.CardTextTitle>USAGE</S.CardTextTitle>
            <S.CardText>
              탕비실 / 가정집 등 필요로 구매할 과자를 찾는다면 이곳을
              참고해보세요!
            </S.CardText>
          </S.CardTextArea>
        </S.Card>
      </S.RoutineBottomArea>
    </S.RoutineArea>
  );
};

export default Routine;
