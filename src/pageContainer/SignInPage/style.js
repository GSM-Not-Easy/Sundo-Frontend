import styled from 'styled-components';

export const SignIn = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInWrapper = styled.div`
  width: 24.125rem;
  height: 29.375rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.25rem 0.5rem 0rem rgba(112, 144, 176, 0.12);
`;

export const SignInTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.75rem;
`;

export const SignInText = styled.span`
  color: #5d5d5d;
`;

export const SignInList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  margin-top: 1.5rem;
`;

export const SignInItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 0.75rem;
    color: #212121;
  }

  input {
    padding: 1rem 0.75rem;
    border: 0.0625rem solid #cacaca;
    border-radius: 0.5rem;

    &:focus {
      border: 0.0625rem solid #6142f8;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.25rem;
`;

export const PasswordToLink = styled.span`
  font-size: 12px;
  color: #888;
`;

export const LinkToSignUpText = styled.span`
  padding-top: 0.75rem;
  color: #888888;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;

  a {
    color: #6142f8;
    margin-left: 0.25rem;
  }
`;
