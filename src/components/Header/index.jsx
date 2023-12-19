// eslint-disable-next-line no-unused-vars
import LogoIcon from '../../assets/svg/LogoIcon';
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoContainer>
          <LogoIcon />
        </S.LogoContainer>
        <S.MenuContainer color='white'>
          <S.MenuTitle>홈</S.MenuTitle>
          <S.MenuTitle>분야</S.MenuTitle>
          <S.MenuTitle>과제</S.MenuTitle>
          <S.MenuTitle>마이페이지</S.MenuTitle>
        </S.MenuContainer>
        <S.SignMenuContainer>
          <S.SignMenuContainer>
            <S.SignInButton>로그인</S.SignInButton>
            <S.SignUpButton>회원가입</S.SignUpButton>
          </S.SignMenuContainer>
        </S.SignMenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
