import styled, { css } from 'styled-components';

export const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafbfe;
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24.125rem;
  height: auto;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0rem 0.25rem 0.75rem 0rem rgba(112, 144, 176, 0.15);

  .dot1 {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
  }
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.25rem;
`;

export const SignUpText = styled.span`
  color: #5d5d5d;
`;

export const TeacherInfoList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.75rem;
  gap: 1rem;
`;

export const TeacherInfoItem = styled.div`
  width: 100%;
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
    margin-bottom: 0.2rem;
  }
`;

export const HomeroomButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const HomeRoomButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #cacaca;
  color: #cacaca;

  ${(props) =>
    props.homeroom &&
    css`
      border: 0.0625rem solid #cacaca;
      color: #fff;
      font-weight: 600;
      background-color: #6142f8;
    `};
`;

export const LinkToSignInText = styled.span`
  padding-top: 0.75rem;
  color: #888888;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;

  a {
    color: #6142f8;
    margin-left: 0.25rem;
  }
`;
