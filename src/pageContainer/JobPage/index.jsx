import * as S from './style';
import * as C from '../../components';
import TestImg from '../../assets/png/BackGround.png';
import { Link } from 'react-router-dom';

const JobPage = () => {
  const test = [
    {
      id: '1',
      name: '(주)비바리퍼블리카',
      major: 'Front-End 개발자',
    },
    {
      id: '2',
      name: '(주)당근',
      major: 'UI/UX 디자이너',
    },
  ];

  return (
    <S.Job>
      <C.Header />
      <S.JobWrapper>
        <S.JobTitle>취업진로부</S.JobTitle>
        <S.JobContent>
          {test.map((Job) => (
            <Link key={Job.id} to={`/job/${Job.id}`}>
              <S.JobItem>
                <img src={TestImg} alt='채용 공고 이미지' />
                <S.Info>
                  <S.CompanyName>{Job.name}</S.CompanyName>
                  <S.Major>{Job.major}</S.Major>
                </S.Info>
              </S.JobItem>
            </Link>
          ))}
        </S.JobContent>
      </S.JobWrapper>
    </S.Job>
  );
};

export default JobPage;
