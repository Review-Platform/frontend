import styled from "styled-components";
import Header from "../../components/account/Header";
import LoginImage from "../../components/account/LoginImage";
import LoginForm from "../../components/account/forms/loginForm/LoginForm";
import SignUpForm from "../../components/account/forms/SignUpForm";
import {
  Container,
  FormContainer,
  Grid,
} from "../../components/account/AccountStyles";

function SignUp() {
  return (
    <Container>
      <Header />
      <Grid>
        <LoginImage />
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </Grid>
    </Container>
  );
}
export default SignUp;
