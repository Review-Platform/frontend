import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  background-image: url("/images/loginImage.png");
  background-size: cover;
  height: 100%;
  width: 50%;
  min-width: 600px;
`;

function LoginImage() {
  console.log("LoginImage rendered");
  return <Container></Container>;
}
export default LoginImage;
