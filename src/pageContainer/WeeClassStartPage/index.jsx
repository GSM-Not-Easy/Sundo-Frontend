import { Header } from '../../components';
import WeeClassChatIcon from '../../assets/png/WeeClassChatIcon.png';

import * as S from './style';

const WeeClassStartPage = () => {
  return (
    <>
      <Header />
      <S.WeeClassWrapper>
        <S.TitleWrapper>
          <S.TitleContainer>
            <S.Title>위클래스</S.Title>
          </S.TitleContainer>
        </S.TitleWrapper>
        <S.ImgWrapper>
          <S.ImgContainer>
            <img
              src={WeeClassChatIcon}
              style={{ width: '15.25rem', height: '15.25rem' }}
              alt='error'
            />
            <S.ChatButton>상담 신청하러 가기</S.ChatButton>
          </S.ImgContainer>
        </S.ImgWrapper>
      </S.WeeClassWrapper>
    </>
  );
};

export default WeeClassStartPage;
