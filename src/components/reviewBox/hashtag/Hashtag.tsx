import * as S from "./style";

function Hashtag({ name, reviewBox }: { name: string; reviewBox: boolean }) {
  return (
    <S.Container reviewBox={reviewBox} big={name?.length === 4 ? true : false}>
      #{name}
    </S.Container>
  );
}
export default Hashtag;
