import styled from "styled-components";
import Header from "../components/Header";
import LoginImage from "../components/LoginImage";
import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";
import { Container, FormContainer, Grid } from "../styles/FormStyles";

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
