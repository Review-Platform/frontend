import { kakaoLogin } from "../../../apis/api/accountApi";
function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  try {
    if (code) {
      kakaoLogin(code).then((res) => console.log(res));
    }
  } catch (error) {
    console.log(error);
  }
  return <></>;
}
export default KakaoRedirect;
