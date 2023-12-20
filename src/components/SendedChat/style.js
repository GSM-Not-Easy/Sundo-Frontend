import styled from 'styled-components';

export const SendChatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.25rem;
  gap: 0.25rem;
`;

export const SendedChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 16rem;
  min-height: 2.25rem;
  max-height: auto;
  background-color: #6142f8;
  padding: 0.375rem 1.25rem;
  border-radius: 1rem 0 1rem 1rem;
  color: #fff;
  line-height: 1.5rem;
`;

export const Time = styled.div`
  font-size: 0.625rem;
  color: #888;
`;
