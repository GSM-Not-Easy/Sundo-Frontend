import * as S from './style';
import * as C from '../../components';
import FieldIcon from '../../assets/png/FieldIcon.png';
import { Link } from 'react-router-dom';

const FieldPage = () => {
  return (
    <S.Field>
      <C.Header />
      <S.FieldContainer>
        <S.FieldContent>
          <S.Title>원하는 분야의 페이지로 이동해 주세요.</S.Title>
          <img src={FieldIcon} alt='분야 선택 이미지' />
          <S.ButtonContainer>
            <Link to='/job'>
              <S.Button>취업진로부</S.Button>
            </Link>
            <Link to='/weeclass'>
              <S.Button>위클래스</S.Button>
            </Link>
            <Link to='/foodlist'>
              <S.Button>급식</S.Button>
            </Link>
          </S.ButtonContainer>
        </S.FieldContent>
      </S.FieldContainer>
    </S.Field>
  );
};

export default FieldPage;
