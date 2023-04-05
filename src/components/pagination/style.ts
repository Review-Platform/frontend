import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 15px;

  &:hover {
    background-color: #feaf00;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: #e0e0e0;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: #ffbe3d;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
