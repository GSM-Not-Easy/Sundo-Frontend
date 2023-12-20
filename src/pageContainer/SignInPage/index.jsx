import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../../components';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <S.SignIn>
      <S.SignInWrapper>
        <S.SignInTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.SignInText>GSM 선생님 통합 관리 서비스</S.SignInText>
        </S.SignInTitle>
        <S.SignInList>
          <S.SignInItem>
            <label>이메일</label>
            <input type='email' placeholder='이메일을 입력해 주세요.' />
          </S.SignInItem>
          <S.SignInItem>
            <label>비밀번호</label>
            <input type='password' placeholder='비밀번호를 입력해 주세요.' />
            <S.TextWrapper>
              <S.PasswordToLink>비밀번호 찾기</S.PasswordToLink>
            </S.TextWrapper>
          </S.SignInItem>
        </S.SignInList>
        <C.Button
          width='80%'
          height='3rem'
          color='#fff'
          backgroundcolor='#6142F8'
          borderradius='0.5rem'
          margintop='1.625rem'
        >
          다음
        </C.Button>
        <S.LinkToSignUpText>
          SUNDO가 처음이신가요?
          <Link to='/signup'>회원가입</Link>
        </S.LinkToSignUpText>
      </S.SignInWrapper>
    </S.SignIn>
  );
};

export default SignInPage;
