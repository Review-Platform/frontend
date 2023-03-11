import { useState } from "react";
import * as S from "./style";
import { useFormContext } from "react-hook-form";
import { ICreateReviewForm } from "../../../../interfaces/createReviewForm";

function FlavorInput({ flavor, index }: { flavor: string; index: number }) {
  const { register } = useFormContext<ICreateReviewForm>();
  const [value, setValue] = useState(1);

  return (
    <S.Inputs>
      <>
        <S.Label onClick={() => setValue(1)} htmlFor={`${flavor}1`}>
          <S.Circle checked={value === 1 ? true : false} />
        </S.Label>
        <S.Input
          value={1}
          id={`${flavor}1`}
          type="radio"
          {...register(`flavor.${index}`)}
          defaultChecked
        />
      </>
      <S.Line />
      <>
        <S.Label onClick={() => setValue(2)} htmlFor={`${flavor}2`}>
          <S.Circle checked={value === 2 ? true : false} />
        </S.Label>
        <S.Input
          value={2}
          {...register(`flavor.${index}`)}
          id={`${flavor}2`}
          type="radio"
        />
      </>
      <S.Line />
      <>
        <S.Label onClick={() => setValue(3)} htmlFor={`${flavor}3`}>
          <S.Circle checked={value === 3 ? true : false} />
        </S.Label>
        <S.Input
          value={3}
          {...register(`flavor.${index}`)}
          id={`${flavor}3`}
          type="radio"
        />
      </>
    </S.Inputs>
  );
}
export default FlavorInput;
