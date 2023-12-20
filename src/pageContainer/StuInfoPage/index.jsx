import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import Girl from '../../assets/png/Girl.png';
import Boy from '../../assets/png/Boy.png';
import { useNavigate } from 'react-router-dom';

const StuInfoPage = () => {
  const navigate = useNavigate();
  const students = [
    {
      classNum: '2209',
      name: '서주미',
      major: 'Front-End Develop',
    },
    {
      classNum: '2405',
      name: '김하온',
      major: 'UI/UX Designer',
    },
    {
      classNum: '2114',
      name: '임준성',
      major: 'Game Developer',
    },
    {
      classNum: '2116',
      name: '정윤서',
      major: 'iOS Developer',
    },
  ];

  return (
    <S.StuInfo>
      <C.Header />
      <S.Content>
        <S.TitleContainer>
          <S.TitleWrapper>
            <S.Title>학생정보</S.Title>
            <S.SubTitle>{students.length}명</S.SubTitle>
          </S.TitleWrapper>
          <S.FilterButton>
            <A.FilterIcon />
            필터
          </S.FilterButton>
        </S.TitleContainer>
        <S.StuList>
          {students.map((student, idx) =>
            idx % 2 === 0 ? (
              <S.StuItem key={idx}>
                <S.StuInfoSelect onClick={() => navigate(`/${student.name}`)}>
                  눌러서 이동 <A.NavigateIcon />
                </S.StuInfoSelect>
                <img src={Girl} alt='여학생' />
                <S.StuInfoContent>
                  <S.Name>{`${student.classNum} ${student.name}`}</S.Name>
                  <S.Major>{`${student.major}`}</S.Major>
                </S.StuInfoContent>
              </S.StuItem>
            ) : (
              <S.StuItem key={idx}>
                <S.StuInfoSelect onClick={() => navigate(`/${student.name}`)}>
                  눌러서 이동 <A.NavigateIcon />
                </S.StuInfoSelect>
                <img src={Boy} alt='남학생' />
                <S.StuInfoContent>
                  <S.Name>{`${student.classNum} ${student.name}`}</S.Name>
                  <S.Major>{`${student.major}`}</S.Major>
                </S.StuInfoContent>
              </S.StuItem>
            )
          )}
        </S.StuList>
      </S.Content>
    </S.StuInfo>
  );
};

export default StuInfoPage;
