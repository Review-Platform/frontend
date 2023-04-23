import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 18px;
  border-right: 1px solid var(--redColor);
  padding: 8px;
  margin: 0;
  background: none;
  color: var(--redColor);
  font-size: 18px;
  opacity: 0.8;
  font-weight: 300;
  cursor: pointer;

  &:first-child {
    border: none;
  }
  &:last-child {
    border: none;
  }
  &:nth-last-child(2) {
    border: none;
  }

  &:hover {
    transform: translateY(-2px);
  }
  &[disabled] {
    opacity: 0.2;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    font-weight: 700;
    font-weight: bold;
    font-size: 20px;
    cursor: revert;
    transform: revert;
  }
`;
