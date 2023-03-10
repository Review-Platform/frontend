import * as S from "./style";
import { useState } from "react";
import StarRadioInput from "./input/StarRadioInput";

function StarRadio() {
  const [value, setValue] = useState(5);
  const inputArray = new Array(5).fill(1);
  return (
    <S.StarRadioContainer>
      <S.Fieldset>
        {inputArray.map((i, index) => (
          <StarRadioInput
            key={index}
            value={value}
            setValue={setValue}
            inputNumber={index + 1}
          />
        ))}
      </S.Fieldset>
    </S.StarRadioContainer>
  );
}
export default StarRadio;
