import {
  Card,
  CardBgImg,
  CardImgArea,
  CardSnackImg,
  CardText,
  CardTextArea,
  CardTextTitle,
  RoutineArea,
  RoutineBottomArea,
  RoutineText,
  RoutineTextLogo,
  RoutineTopArea,
} from "../../styles/RoutineStyles";

const Routine = () => {
  return (
    <RoutineArea>
      <RoutineTopArea>
        <RoutineTextLogo src={require("../../imgs/SnackOfRoutine.png")} />
        <RoutineText>
          지금 이 순간에 가장 적합한 과자 종류들을 만나보세요.
        </RoutineText>
      </RoutineTopArea>
      <RoutineBottomArea>
        <Card>
          <CardImgArea>
            <CardBgImg src={require("../../imgs/CardBackground.png")} />
            <CardSnackImg src={require("../../imgs/Cheetos.png")} />
          </CardImgArea>
          <CardTextArea>
            <CardTextTitle>NORMAL</CardTextTitle>
            <CardText>
              그저 / 그냥 / 단순하게 끌려서 과자를 사먹을 예정이라면 이곳을
              확인해보세요!
            </CardText>
          </CardTextArea>
        </Card>
        <Card>
          <CardImgArea>
            <CardBgImg src={require("../../imgs/CardBackground.png")} />
            <CardSnackImg src={require("../../imgs/AirPotato.png")} />
          </CardImgArea>
          <CardTextArea>
            <CardTextTitle>FEEL</CardTextTitle>
            <CardText>
              파티 / 분위기 / 기분에 맞는 과자를 원하신다면 이런 과자는
              어떠세요?
            </CardText>
          </CardTextArea>
        </Card>
        <Card>
          <CardImgArea>
            <CardBgImg src={require("../../imgs/CardBackground.png")} />
            <CardSnackImg src={require("../../imgs/Pepero.png")} />
          </CardImgArea>
          <CardTextArea>
            <CardTextTitle>USAGE</CardTextTitle>
            <CardText>
              탕비실 / 가정집 등 필요로 구매할 과자를 찾는다면 이곳을
              참고해보세요!
            </CardText>
          </CardTextArea>
        </Card>
      </RoutineBottomArea>
    </RoutineArea>
  );
};

export default Routine;
