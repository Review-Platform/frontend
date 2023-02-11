import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: calc((80 / 1080) * 100%);
  background-color: #5d4ad7;
`;

function Header() {
  console.log("Header rendered");
  return <HeaderContainer>LOGO?</HeaderContainer>;
}
export default Header;
