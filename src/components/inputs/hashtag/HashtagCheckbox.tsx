import { useState } from "react";
import * as S from "./style";
import HashtagCheckboxInput from "./input/HashtagCheckboxInput";

function HashtagCheckbox() {
  const hashtagArray = [
    "영화",
    "안주",
    "인기",
    "가족",
    "파티",
    "일상",
    "오리지날",
    "다이어트",
  ];
  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };
  return (
    <S.HashtagContainer>
      <S.HashtagRow>
        {hashtagArray.slice(0, 4).map((i, index) => (
          <S.HashtagInput key={index}>
            <HashtagCheckboxInput
              i={i}
              index={index}
              selected={selected}
              setSelected={setSelected}
              big={false}
            />
          </S.HashtagInput>
        ))}
      </S.HashtagRow>
      <S.HashtagRow>
        {hashtagArray.slice(4, 6).map((i, index) => (
          <S.HashtagInput key={index}>
            <HashtagCheckboxInput
              i={i}
              index={index + 4}
              selected={selected}
              setSelected={setSelected}
              big={false}
            />
          </S.HashtagInput>
        ))}
        {hashtagArray.slice(6, 8).map((i, index) => (
          <S.HashtagInput key={index}>
            <HashtagCheckboxInput
              i={i}
              index={index + 6}
              selected={selected}
              setSelected={setSelected}
              big={true}
            />
          </S.HashtagInput>
        ))}
      </S.HashtagRow>
    </S.HashtagContainer>
  );
}
export default HashtagCheckbox;
