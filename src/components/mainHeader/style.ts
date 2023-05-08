import styled from "styled-components";

export const Header = styled.header`
  width: 1200px;
  background-color: white;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
`;

export const BottomNav = styled.div`
  margin: 80px 0 21px 0;
  display: flex;
  justify-content: center;
`;

export const ImgArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 230px;
  height: 110.82px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  margin-right: 30px;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
`;
export const BottomNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
`;
export const TopNavItem = styled.li`
  color: var(--textColor);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;
  cursor: pointer;
`;

export const LogOutText = styled(TopNavItem)`
  margin-left: 50px;
`;

export const BottomNavItem = styled.li`
  color: var(--textColor);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;
