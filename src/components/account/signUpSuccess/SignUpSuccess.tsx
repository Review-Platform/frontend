import * as S from "./style";
import { useNavigate } from "react-router-dom";

function SignUpSuccess() {
  const navigate = useNavigate();
  const handleHomeClick = () => navigate("/");
  return (
    <S.Container>
      <S.Logo src={require("../../../imgs/logo/mainLogo.png")} />
      <S.Congratulations>회원가입을 축하합니다!</S.Congratulations>
      <S.Text>스낵빌리지에서 다양한</S.Text>
      <S.Text>리뷰와 랭킹을 확인해보세요!</S.Text>
      <S.HomeBtn onClick={handleHomeClick}>홈으로 가기</S.HomeBtn>
    </S.Container>
  );
}
export default SignUpSuccess;
