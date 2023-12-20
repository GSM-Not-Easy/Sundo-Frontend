import styled from 'styled-components';

export const WeeStuChat = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > .arrow {
    position: absolute;
    top: 6rem;
    left: 28rem;
    cursor: pointer;
  }
`;

export const ChatContainer = styled.div`
  position: relative;
  width: 43.9375rem;
  height: 88vh;
  border-radius: 0.5rem;
  border: 0.0625rem solid #d7d1f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatWrapper = styled.div`
  width: 85%;
  height: 80%;
  margin-top: 3rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.875rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const MessageInput = styled.input`
  width: 85%;
  height: 3rem;
  border: 0.0625rem solid #6142f8;
  border-radius: 1.5625rem;
  padding-left: 1.5rem;
  font-size: 0.875rem;
  color: #212121;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  > svg {
    position: absolute;
    right: 4.3125rem;
    cursor: pointer;
  }
`;
