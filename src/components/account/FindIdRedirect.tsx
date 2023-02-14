import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: calc((408 / 1920) * 100vw);
  height: calc((454 / 1080) * 100vh);
  display: flex;
  justify-content: center;
  min-width: 300px;
  min-height: 350px;
`;

const Title = styled.div`
  width: 100%;
  height: calc((51 / 717) * 100%);
  font-weight: 700;
  font-size: 40px;
  line-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowId = styled.div`
  width: 100%;
  min-width: 300px;
  position: absolute;
  left: 0.98%;
  right: 0.74%;
  top: 30.84%;
  bottom: 40.53%;
`;

const YourIdIs = styled.div`
  width: calc((389 / 1920) * 100vw);
  min-width: 300px;

  height: calc((51 / 1080) * 100vh);
  left: 0.98%;
  right: 3.68%;
  top: 30.84%;
  bottom: 57.93%;
  font-size: 25px;
  font-weight: 700;
  line-height: 43px;
`;

const 입니다 = styled.div`
  width: 100%;
  position: absolute;
  left: 75.49%;
  right: 0.74%;
  top: 49.12%;
  bottom: 40.53%;
  bottom: 57.93%;
  font-size: 25px;
  font-weight: 700;
  line-height: 43px;
`;

const Id = styled.div`
  width: calc((284 / 1920) * 100vw);
  height: calc((51 / 1080) * 100vh);
  min-width: 210px;
  min-height:38px;

  position: absolute;
  left: 0.98%;
  right: 29.41%;
  top: 52.24%;
  bottom: 40.53%;
  background-color: #f8f8f8;
  border-radius: 10px;
  color: #4963ea;
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: calc((60 / 1080) * 100vh);
  min-height: 45px;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 78.41%;
  bottom: 8.37%;
  background-color: black;
  color: white;
  border-radius: 40px;
  cursor: pointer;
`;

const FindPassword = styled.div`
  width: calc((109.5 / 1920) * 100vw);
  min-width: 83px;
  height: calc((23 / 1080) * 100vh);
  position: absolute;
  left: 69.36%;
  right: 3.8%;
  top: 94.93%;
  bottom: 0%;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: right;
  cursor: pointer;
`;

function FindIdSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  console.log(name);
  return (
    <Container>
      <Title>계정 안내</Title>
      <ShowId>
        <YourIdIs>000님의 아이디는</YourIdIs>
        <Id>{`${name}`}</Id>
        <입니다>입니다.</입니다>
      </ShowId>
      <LoginBtn onClick={() => navigate("/login")}>로그인하러 가기</LoginBtn>
      <FindPassword onClick={() => navigate("/login/find-password")}>
        비밀번호 찾기 {">"}{" "}
      </FindPassword>
    </Container>
  );
}
export default FindIdSuccess;
