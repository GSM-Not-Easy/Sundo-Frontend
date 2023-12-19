// eslint-disable-next-line no-unused-vars
import { LogoIcon, LogoIcon2 } from '../../assets/svg';
import * as S from './style';

const Header = ({ type }) => {
  return (
    <S.HeaderWrapper type={type}>
      <S.HeaderContainer>
        <S.LogoContainer>
          {type === 'main' ? <LogoIcon /> : <LogoIcon2 />}
        </S.LogoContainer>
        <S.MenuContainer type={type}>
          <S.MenuTitle>홈</S.MenuTitle>
          <S.MenuTitle>분야</S.MenuTitle>
          <S.MenuTitle>과제</S.MenuTitle>
          <S.MenuTitle>마이페이지</S.MenuTitle>
        </S.MenuContainer>
        <S.SignMenuContainer>
          <S.SignMenuContainer type={type}>
            <S.SignInButton className='signIn' type={type}>
              로그인
            </S.SignInButton>
            <S.SignUpButton className='signUp' type={type}>
              회원가입
            </S.SignUpButton>
          </S.SignMenuContainer>
        </S.SignMenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
