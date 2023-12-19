import * as S from './style';
import * as A from '../../../assets/svg';
import * as C from '../../../components';
import { Link } from 'react-router-dom';

const EnterInfoPage = () => {
  return (
    <S.SignUp>
      <S.EnterInfoWrapper>
        <A.Dot2 />
        <S.InfoTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.InfoTitleText>GSM 선생님 통합 관리 서비스</S.InfoTitleText>
        </S.InfoTitle>
        <S.InputList>
          <S.InputItem>
            <label for='email'>이메일</label>
            <input
              type='email'
              id='email'
              placeholder='이메일을 입력해 주세요.'
            />
          </S.InputItem>
          <S.InputItem>
            <label for='name'>이름</label>
            <input type='text' id='name' placeholder='이름을 입력해 주세요.' />
          </S.InputItem>
          <S.InputItem>
            <label for='password1'>비밀번호</label>
            <input
              type='password'
              id='password1'
              placeholder='비밀번호를 입력해 주세요.'
            />
          </S.InputItem>
          <S.InputItem>
            <label for='password2'>비밀번호 확인</label>
            <input
              type='password'
              id='password2'
              placeholder='비밀번호를 한번 더 입력해 주세요.'
            />
          </S.InputItem>
        </S.InputList>
        <C.Button
          width='80%'
          height='3rem'
          backgroundColor='#6142F8'
          color='#fff'
          borderRadius='0.5rem'
          marginTop='2.5rem'
        >
          다음
        </C.Button>
        <S.LinkToSignInText>
          SUNDO의 회원이신가요? <Link to='/signin'>로그인</Link>
        </S.LinkToSignInText>
      </S.EnterInfoWrapper>
    </S.SignUp>
  );
};

export default EnterInfoPage;
