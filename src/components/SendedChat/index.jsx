import * as S from './style';

const SendedChat = ({ children }) => {
  return (
    <S.SendChatContainer>
      <S.ChatContainer>
        <S.Time>13:10</S.Time>
        <S.SendedChat>{children}</S.SendedChat>
      </S.ChatContainer>
    </S.SendChatContainer>
  );
};

export default SendedChat;
