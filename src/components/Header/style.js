import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 4.5rem;
  background-color: #6142f8;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15.3125rem;
`;

export const LogoContainer = styled.div`
  width: 7.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const MenuTitle = styled.span`
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const SignMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const SignInButton = styled.button`
  background-color: white;
  color: #6142f8;
  font-weight: 600;
  border-radius: 4.5rem;
  border: 0;
  width: 3.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  background-color: #6142f8;
  color: white;
  font-weight: 600;
  border-radius: 4.5rem;
  width: 3.75rem;
  height: 1.75rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #6142f8;
  }
`;
