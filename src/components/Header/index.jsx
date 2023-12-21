// eslint-disable-next-line no-unused-vars
import { LogoIcon, LogoIcon2 } from '../../assets/svg';
import * as S from './style';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ type }) => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <S.HeaderWrapper type={type}>
      <S.HeaderContainer>
        <S.LogoContainer onClick={() => navigation('/')}>
          {type === 'main' ? <LogoIcon /> : <LogoIcon2 />}
        </S.LogoContainer>
        <S.MenuContainer>
          <S.MenuTitle onClick={() => navigation('/')} type={type}>
            홈
          </S.MenuTitle>
          <S.MenuTitle
            onClick={() => navigation('/field')}
            active={location.pathname === '/field'}
            type={type}
          >
            분야
          </S.MenuTitle>
          <S.MenuTitle
            onClick={() => navigation('/task')}
            active={location.pathname === '/task'}
            type={type}
          >
            과제
          </S.MenuTitle>
          <S.MenuTitle
            onClick={() => navigation('/my')}
            active={location.pathname === '/my'}
            type={type}
          >
            마이페이지
          </S.MenuTitle>
          <S.MenuTitle
            onClick={() => navigation('/stuinfo')}
            active={location.pathname === '/stuinfo'}
            type={type}
          >
            학생 정보
          </S.MenuTitle>
        </S.MenuContainer>
        <S.SignMenuContainer>
          <S.SignMenuContainer type={type}>
            <S.SignInButton
              className='signIn'
              type={type}
              onClick={() => navigation('/signin')}
            >
              로그인
            </S.SignInButton>
            <S.SignUpButton
              className='signUp'
              type={type}
              onClick={() => navigation('/signup')}
            >
              회원가입
            </S.SignUpButton>
          </S.SignMenuContainer>
        </S.SignMenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
