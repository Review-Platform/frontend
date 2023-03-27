import * as S from "./style";

function Hashtag({ name }: { name: string }) {
  return (
    <S.Container big={name?.length === 4 ? true : false}>#{name}</S.Container>
  );
}
export default Hashtag;
