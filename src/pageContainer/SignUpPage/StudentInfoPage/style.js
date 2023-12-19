import styled from 'styled-components';

export const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StudentInfoWrapper = styled.div`
  position: relative;
  width: 24.125rem;
  height: 33.125rem;
  max-height: auto;
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(112, 144, 176, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;

  .dot1 {
    position: absolute;
    top: 2.25rem;
    right: 2rem;
  }

  form {
    width: 100%;
  }
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

export const SignUpText = styled.span`
  color: #5d5d5d;
`;

export const SelectList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.75rem;
  gap: 1rem;
`;

export const SelectItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    color: #212121;
    font-size: 0.75rem;
  }

  select {
    height: 3rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
    outline: none;
    border: none;
    color: #888;
  }
`;

export const LinkToSignInText = styled.span`
  padding-top: 0.75rem;
  color: #888888;
  font-size: 0.75rem;

  a {
    color: #6142f8;
    margin-left: 0.25rem;
  }
`;
