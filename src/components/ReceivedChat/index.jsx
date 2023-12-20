import * as S from './style';
import Girl from '../../assets/png/Girl.png';

const ReceivedChat = ({ children }) => {
  return (
    <S.ReceivedChatContainer>
      <S.Profile>
        <S.Img src={Girl} alt='여학생' />
        <S.Name>위클래스 선생님</S.Name>
      </S.Profile>
      <S.ChatContainer>
        <S.ReceivedChat>{children}</S.ReceivedChat>
        <S.Time>13:10</S.Time>
      </S.ChatContainer>
    </S.ReceivedChatContainer>
  );
};

export default ReceivedChat;
