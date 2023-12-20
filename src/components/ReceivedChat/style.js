import styled from 'styled-components';

export const ReceivedChatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const Name = styled.span`
  color: #212121;
  font-weight: 600;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 2.5rem;
  margin-bottom: 0.25rem;
  gap: 0.25rem;
`;

export const ReceivedChat = styled.div`
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 16rem;
  min-height: 2.25rem;
  max-height: auto;
  padding: 0.375rem 1.25rem;
  border-radius: 0rem 1rem 1rem 1rem;
  line-height: 1.5rem;
  color: #212121;
`;

export const Time = styled.span`
  color: #888;
  font-size: 0.625rem;
`;
