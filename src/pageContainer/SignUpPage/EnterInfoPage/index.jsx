import * as S from './style';
import * as A from '../../../assets/svg';
import * as C from '../../../components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Step } from '../../../atoms/atoms';

const EnterInfoPage = () => {
  const [step, setStep] = useRecoilState(Step);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setStep('회원가입완료');
  };
  const password1Value = watch('password1', '');

  return (
    <S.SignUp>
      <S.EnterInfoWrapper>
        <A.Dot2 />
        <S.InfoTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.InfoTitleText>GSM 선생님 통합 관리 서비스</S.InfoTitleText>
        </S.InfoTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.InputList>
            <S.InputItem>
              <label htmlFor='email'>이메일</label>
              <input
                type='email'
                id='email'
                placeholder='이메일을 입력해 주세요.'
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: '유효한 이메일 주소를 입력해주세요.',
                  },
                })}
              />
              {errors.email && (
                <S.ErrorMessage>
                  <A.ErrorIcon />
                  {errors.email.message}
                </S.ErrorMessage>
              )}
            </S.InputItem>
            <S.InputItem>
              <label htmlFor='name'>이름</label>
              <input
                type='text'
                id='name'
                placeholder='이름을 입력해 주세요.'
                {...register('name', {
                  required: '이름을 입력해주세요.',
                })}
              />
              {errors.name && (
                <S.ErrorMessage>
                  <A.ErrorIcon />
                  {errors.name.message}
                </S.ErrorMessage>
              )}
            </S.InputItem>
            <S.InputItem>
              <label htmlFor='password1'>비밀번호</label>
              <input
                type='password'
                id='password1'
                placeholder='비밀번호를 입력해 주세요.'
                {...register('password1', {
                  required: '비밀번호를 입력해주세요.',
                })}
              />
              {errors.password1 && (
                <S.ErrorMessage>
                  <A.ErrorIcon />
                  {errors.password1.message}
                </S.ErrorMessage>
              )}
            </S.InputItem>
            <S.InputItem>
              <label htmlFor='password2'>비밀번호 확인</label>
              <input
                type='password'
                id='password2'
                placeholder='비밀번호를 한번 더 입력해 주세요.'
                {...register('password2', {
                  required: '비밀번호를 한번 더 입력해주세요.',
                  validate: (value) =>
                    value === '' ||
                    value === password1Value ||
                    '비밀번호가 일치하지 않습니다.',
                })}
              />
              {errors.password2 && (
                <S.ErrorMessage>
                  <A.ErrorIcon />
                  {errors.password2.message}
                </S.ErrorMessage>
              )}
            </S.InputItem>
          </S.InputList>
          <C.Button
            type='submit'
            width='80%'
            height='3rem'
            backgroundcolor='#6142F8'
            color='#fff'
            borderradius='0.5rem'
            margintop='2.5rem'
          >
            완료
          </C.Button>
        </form>
        <S.LinkToSignInText>
          SUNDO의 회원이신가요? <Link to='/signin'>로그인</Link>
        </S.LinkToSignInText>
      </S.EnterInfoWrapper>
    </S.SignUp>
  );
};

export default EnterInfoPage;
