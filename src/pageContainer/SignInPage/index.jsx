import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };

  const testPassword = '1234';
  const enteredPassword = watch('password');

  console.log(enteredPassword);

  return (
    <S.SignIn>
      <S.SignInWrapper>
        <S.SignInTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.SignInText>GSM 선생님 통합 관리 서비스</S.SignInText>
        </S.SignInTitle>
        <S.SignInList>
          <S.SignInItem>
            <label htmlFor='email'>이메일</label>
            <input
              id='email'
              type='email'
              placeholder='이메일을 입력해 주세요.'
              {...register('email', {
                required: '이메일을 입력해 주세요.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '유효한 이메일 주소를 입력해주세요.',
                },
              })}
            />
          </S.SignInItem>
          {errors.email && (
            <S.ErrorMessage>
              <A.ErrorIcon />
              {errors.email.message}
            </S.ErrorMessage>
          )}
          <S.SignInItem>
            <label htmlFor='password'>비밀번호</label>
            <input
              id='password'
              type='password'
              placeholder='비밀번호를 입력해 주세요.'
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
                validate: (value) =>
                  value === '' ||
                  testPassword === value ||
                  '비밀번호가 일치하지 않습니다.',
              })}
            />
            <S.TextWrapper hasError={!!errors.password}>
              {errors.password && (
                <S.ErrorMessage>
                  <A.ErrorIcon />
                  {errors.password.message}
                </S.ErrorMessage>
              )}
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
          onClick={handleSubmit(onSubmit)}
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
