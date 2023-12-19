import * as S from './style';
import SuccessIcon from '../../../assets/png/SuccessIcon.png';
import * as C from '../../../components';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <S.SignUp>
      <S.SuccessWrapper>
        <S.SuccessTitle>
          회원가입에 성공했습니다.
          <br />
          로그인 후 선도를 이용해 보세요!
        </S.SuccessTitle>
        <img src={SuccessIcon} alt='성공 아이콘' />
        <Link to='/signin'>
          <C.Button
            width='9rem'
            height='3rem'
            backgroundcolor='#6142F8'
            color='#fff'
            borderradius='0.5rem'
            fontSize='1rem'
            fontWeight='600'
            margintop='2.5rem'
          >
            로그인 하러가기
          </C.Button>
        </Link>
      </S.SuccessWrapper>
    </S.SignUp>
  );
};

export default SuccessPage;
