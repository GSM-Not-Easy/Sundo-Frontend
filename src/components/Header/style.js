import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 4.5rem;
  background-color: ${(props) => (props.type === 'main' ? '#6142f8' : 'white')};
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 15.3125rem;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 7.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  span {
    color: ${(props) => (props.type === 'main' ? 'white' : '#212121')};
  }
`;
export const MenuTitle = styled.span`
  font-size: 1.125rem;
  cursor: pointer;
`;

export const SignMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .signIn {
    &:hover {
      opacity: ${(props) => (props.type === 'main' ? '80%' : '')};
      background-color: ${(props) =>
        props.type === 'main' ? 'white' : '#3819D2'};
    }
    &:active {
      opacity: ${(props) => (props.type === 'main' ? '60%' : '')};
      background-color: ${(props) =>
        props.type === 'main' ? 'white' : '#3819D2'};
    }
  }

  .signUp {
    &:hover {
      border: ${(props) =>
        props.type === 'main'
          ? '0.0625rem solid white'
          : '0.0625rem solid #CACACA'};
    }
    &:active {
      background-color: white;
      color: ${(props) => (props.type === 'main' ? '#6142f8' : '')};
      border: ${(props) => (props.type === 'main' ? '' : '0')};
    }
  }
`;
export const SignInButton = styled.button`
  background-color: ${(props) => (props.type === 'main' ? 'white' : '#6142f8')};
  color: ${(props) => (props.type === 'main' ? '#6142f8' : 'white')};
  font-weight: 600;
  border-radius: 4.5rem;
  border: 0;
  width: 3.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  background-color: ${(props) => (props.type === 'main' ? '#6142f8' : 'white')};
  color: ${(props) => (props.type === 'main' ? 'white' : '#A2A2A2')};
  font-weight: 600;
  border-radius: 4.5rem;
  width: 3.75rem;
  height: 1.75rem;
  border: 0;
  cursor: pointer;
`;
