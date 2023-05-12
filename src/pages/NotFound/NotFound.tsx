import * as S from "./style";
function NotFound() {
  return (
    <S.Layout>
      <S.BgImg src="/images/notFoundBg.png" />
      <S.Title>404 {"\n"} NOT FOUND</S.Title>
      <S.Row1>페이지를 찾을 수 없습니다.</S.Row1>
      <S.Row2>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.{"\n"}입력하신
        주소가 정확한지 다시 한 번 확인해주세요.
      </S.Row2>
    </S.Layout>
  );
}
export default NotFound;
