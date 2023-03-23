import * as S from "./style";
import { useNavigate, useLocation } from "react-router-dom";

function FindIdSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, id } = location.state;
  return (
    <S.Container>
      <S.Title>계정 안내</S.Title>
      <S.ShowIdBox>
        <S.YourIdIs>{name}님의 아이디입니다.</S.YourIdIs>
        <S.IdBox>
          <S.Id>{`${id}`}</S.Id>
        </S.IdBox>
      </S.ShowIdBox>
      <S.LoginBtn onClick={() => navigate("/login")}>
        로그인하러 가기
      </S.LoginBtn>
      <S.FindPassword onClick={() => navigate("/login/find-password")}>
        비밀번호 찾기 {">"}{" "}
      </S.FindPassword>
    </S.Container>
  );
}
export default FindIdSuccess;
