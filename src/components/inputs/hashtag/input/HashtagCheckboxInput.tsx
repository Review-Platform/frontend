import * as S from "./style";

function HashtagCheckboxInput({
  i,
  index,
  selected,
  setSelected,
  big,
}: {
  i: string;
  index: number;
  selected: boolean[];
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
  big: boolean;
}) {
  const toggleSelected = (index: number) => {
    setSelected((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };
  return (
    <>
      <S.Label onClick={() => toggleSelected(index)} htmlFor={i}>
        <S.HashtagBox selected={selected[index]} big={big}>
          #{i}
        </S.HashtagBox>
      </S.Label>
      <S.CheckBox id={i} type="checkbox" />
    </>
  );
}
export default HashtagCheckboxInput;
