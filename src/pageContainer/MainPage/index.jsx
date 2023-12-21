import { Header } from '../../components';
import BackGround from '../../assets/png/BackGround.png';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header type='main' />
      <img
        src={BackGround}
        alt='error'
        style={{
          position: 'absolute',
          width: '100vw',
          height: '93.15vh',
          zIndex: '-1',
        }}
      />
      <S.MainContainer>
        <S.TitleContainer>
          <S.Title>광주소프트웨어마이스터고등학교</S.Title>
          <S.Title>선생님 도우미 서비스</S.Title>
        </S.TitleContainer>
        <S.StartContainer>
          <S.StartButton onClick={() => navigate('/signin')}>
            SUNDO 시작하기
          </S.StartButton>
        </S.StartContainer>
      </S.MainContainer>
    </>
  );
};

export default MainPage;
