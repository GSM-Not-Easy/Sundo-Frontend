import * as S from './style';
import * as A from '../../../assets/svg';
import * as C from '../../../components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Step } from '../../../atoms/atoms';
import { useForm } from 'react-hook-form';

const StudentInfoPage = () => {
  const [step, setStep] = useRecoilState(Step);
  const { register, handleSubmit } = useForm();

  const numberOptions = Array.from({ length: 19 }, (_, i) => i + 1);

  const onSubmit = (data) => {
    console.log(data);
    setStep('정보입력');
  };

  return (
    <S.SignUp>
      <S.StudentInfoWrapper>
        <A.Dot1 />
        <S.SignUpTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.SignUpText>GSM 선생님 통합 관리 서비스</S.SignUpText>
        </S.SignUpTitle>
        <S.SelectList>
          <S.SelectItem>
            <label htmlFor='grade'>학년</label>
            <select id='grade' {...register('grade')}>
              {[1, 2, 3].map((grade) => (
                <option key={grade} value={String(grade)}>
                  {grade}학년
                </option>
              ))}
            </select>
          </S.SelectItem>
          <S.SelectItem>
            <label htmlFor='class'>반</label>
            <select id='class' {...register('classNum')}>
              {[1, 2, 3, 4].map((classNum) => (
                <option key={classNum} value={String(classNum)}>
                  {classNum}반
                </option>
              ))}
            </select>
          </S.SelectItem>
          <S.SelectItem>
            <label htmlFor='number'>번호</label>
            <select id='number' {...register('number')}>
              {numberOptions.map((number) => (
                <option key={number} value={String(number)}>
                  {number}번
                </option>
              ))}
            </select>
          </S.SelectItem>
        </S.SelectList>
        <C.Button
          width='80%'
          height='3rem'
          color='#fff'
          backgroundcolor='#6142F8'
          borderradius='0.5rem'
          margintop='2.5rem'
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </C.Button>
        <S.LinkToSignInText>
          SUNDO의 회원이신가요?
          <Link to='/signin'>로그인</Link>
        </S.LinkToSignInText>
      </S.StudentInfoWrapper>
    </S.SignUp>
  );
};

export default StudentInfoPage;
