import * as S from './style';
import * as A from '../../../assets/svg';
import * as C from '../../../components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Step } from '../../../atoms/atoms';

const TeacherInfoPage = () => {
  const [step, setStep] = useRecoilState(Step);
  const { register, handleSubmit } = useForm();
  const [homeroom, setHomeroom] = useState(true);

  const onSubmit = (data) => {
    if (!homeroom) {
      data.grade = '';
      data.classNum = '';
    }
    console.log(data);
    setStep('정보입력');
  };

  const subject = [
    {
      value: 'KOREAN',
      label: '국어',
    },
    {
      value: 'MATH',
      label: '수학',
    },
    {
      value: 'SOCIAL',
      label: '사회',
    },
    {
      value: 'SCIENCE',
      label: '과학',
    },
    {
      value: 'PE',
      label: '체육',
    },
    {
      value: 'MUSIC',
      label: '음악',
    },
    {
      value: 'ART',
      label: '미술',
    },
    {
      value: 'SYSTEM_PROGRAM',
      label: '시스템 프로그래밍',
    },
    {
      value: 'SCREEN_IMPL',
      label: '화면구현',
    },
    {
      value: 'HARDWARE',
      label: '하드웨어',
    },
    {
      value: 'FOOD',
      label: '영양사',
    },
    {
      value: 'WEE',
      label: '위클래스',
    },
    {
      value: 'JOB',
      label: '취업진로',
    },
  ];
  return (
    <S.SignUp>
      <S.TeacherInfoWrapper>
        <A.Dot1 />
        <S.SignUpTitle>
          <A.SignUpLogo width={170} height={64} />
          <S.SignUpText>GSM 선생님 통합 관리 서비스</S.SignUpText>
        </S.SignUpTitle>
        <S.TeacherInfoList>
          <S.TeacherInfoItem>
            <label htmlFor='subject'>담당부서</label>
            <select id='subject' {...register('subject')}>
              {subject.map((subject, idx) => (
                <option key={idx} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>
          </S.TeacherInfoItem>
          <S.TeacherInfoItem>
            <label htmlFor='grade'>담임선생님 여부</label>
            <S.HomeroomButtonWrapper>
              <S.HomeRoomButton
                homeroom={homeroom}
                onClick={() => setHomeroom(true)}
              >
                담임
              </S.HomeRoomButton>
              <S.HomeRoomButton
                homeroom={!homeroom}
                onClick={() => setHomeroom(false)}
              >
                비담임
              </S.HomeRoomButton>
            </S.HomeroomButtonWrapper>
            {homeroom && (
              <>
                <select id='grade' {...register('grade')}>
                  {[1, 2, 3].map((grade, idx) => (
                    <option key={idx} value={String(grade)}>
                      {grade}학년
                    </option>
                  ))}
                </select>
                <select id='classNum' {...register('classNum')}>
                  {[1, 2, 3, 4].map((classNum, idx) => (
                    <option key={idx} value={String(classNum)}>
                      {classNum}반
                    </option>
                  ))}
                </select>
              </>
            )}
          </S.TeacherInfoItem>
        </S.TeacherInfoList>
        <C.Button
          width='80%'
          height='3rem'
          color='#fff'
          backgroundcolor='#6142F8'
          borderradius='0.5rem'
          margintop='2.5rem'
          onClick={handleSubmit(onSubmit)}
        >
          완료
        </C.Button>
        <S.LinkToSignInText>
          SUNDO의 회원이신가요?
          <Link to='/signin'>로그인</Link>
        </S.LinkToSignInText>
      </S.TeacherInfoWrapper>
    </S.SignUp>
  );
};

export default TeacherInfoPage;
