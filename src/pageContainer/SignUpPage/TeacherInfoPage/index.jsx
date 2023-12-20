import * as S from './style';
import * as A from '../../../assets/svg';
import * as C from '../../../components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherInfoPage = () => {
  const { register, handleSubmit } = useForm();
  const [homeroom, setHomeroom] = useState(true);
  const subject = [
    {
      value: 'korean',
      label: '국어',
    },
    {
      value: 'math',
      label: '수학',
    },
    {
      value: 'social',
      label: '사회',
    },
    {
      value: 'science',
      label: '과학',
    },
    {
      value: 'pe',
      label: '체육',
    },
    {
      value: 'music',
      label: '음악',
    },
    {
      value: 'art',
      label: '미술',
    },
    {
      value: 'system_program',
      label: '시스템 프로그래밍',
    },
    {
      value: 'screen_impl',
      label: '화면구현',
    },
    {
      value: 'hardware',
      label: '하드웨어',
    },
    {
      value: 'nutritionist',
      label: '영양사',
    },
    {
      value: 'job',
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
