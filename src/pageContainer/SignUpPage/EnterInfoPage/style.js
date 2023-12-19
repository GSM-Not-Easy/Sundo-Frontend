import styled from 'styled-components';

export const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f8fb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnterInfoWrapper = styled.div`
  position: relative;
  width: 24.125rem;
  height: 39rem;
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(112, 144, 176, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  .dot2 {
    position: absolute;
    top: 1.75rem;
    right: 2rem;
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.75rem;
`;

export const InfoTitleText = styled.span`
  color: #5d5d5d;
`;

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1rem;
  margin-top: 3.125rem;
`;

export const InputItem = styled.div`
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

export const LinkToSignInText = styled.span`
  margin-top: 0.75rem;
  color: #888888;
  font-size: 0.75rem;

  a {
    color: #6142f8;
    margin-left: 0.25rem;
  }
`;
