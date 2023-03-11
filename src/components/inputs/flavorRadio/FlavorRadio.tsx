import FlavorInput from "./input/FlavorInput";
import * as S from "./style";

function FlavorRadio() {
  const flavorArray = ["단맛", "신맛", "짠맛", "매운맛"];

  return (
    <S.FlavorRadios>
      {flavorArray.map((i, index) => (
        <S.FlavorRadioContainer key={i}>
          {i}
          <FlavorInput key={i} flavor={i} index={index} />
        </S.FlavorRadioContainer>
      ))}
    </S.FlavorRadios>
  );
}
export default FlavorRadio;
