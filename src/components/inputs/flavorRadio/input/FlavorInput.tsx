import { useState } from "react";
import * as S from "./style";

function FlavorInput({ flavor }: { flavor: string }) {
  const valueArray = [1, 2, 3];
  const [value, setValue] = useState(2);
  return (
    <S.Inputs>
      <>
        <S.Label onClick={() => setValue(1)} htmlFor={`${flavor}1`}>
          <S.Circle checked={value === 1 ? true : false} />
        </S.Label>
        <S.Input id={`${flavor}1`} name={flavor} type="radio" />
      </>
      <S.Line />
      <>
        <S.Label onClick={() => setValue(2)} htmlFor={`${flavor}2`}>
          <S.Circle checked={value === 2 ? true : false} />
        </S.Label>
        <S.Input id={`${flavor}2`} name={flavor} type="radio" defaultChecked />
      </>
      <S.Line />
      <>
        <S.Label onClick={() => setValue(3)} htmlFor={`${flavor}3`}>
          <S.Circle checked={value === 3 ? true : false} />
        </S.Label>
        <S.Input id={`${flavor}3`} name={flavor} type="radio" />
      </>
    </S.Inputs>
  );
}
export default FlavorInput;
