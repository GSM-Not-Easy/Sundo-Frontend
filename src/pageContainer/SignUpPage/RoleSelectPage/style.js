import styled from 'styled-components';

export const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
`;

export const SignUpText = styled.span`
  color: #5d5d5d;
`;

export const RoleSelectWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const RoleSelectItem = styled.div`
  width: 13.75rem;
  height: 15rem;
  border: 0.0625rem solid #b2b2b2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.25rem;
  cursor: pointer;

  &:hover {
    background-color: #6142f8;

    span {
      color: #fff;
    }

    path {
      fill: #fff;
    }
  }

  &:active {
    background-color: #3819d2;

    span {
      color: #d7d1f6;
    }

    path {
      fill: #d7d1f6;
    }
  }
`;

export const RoleSelectText = styled.span`
  color: #b2b2b2;
`;
