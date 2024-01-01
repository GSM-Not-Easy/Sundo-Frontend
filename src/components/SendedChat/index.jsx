import * as S from './style';

const SendedChat = ({ children, time }) => {
  return (
    <S.SendChatContainer>
      <S.ChatContainer>
        <S.Time>{time}</S.Time>
        <S.SendedChat>{children}</S.SendedChat>
      </S.ChatContainer>
    </S.SendChatContainer>
  );
};

export default SendedChat;
