import * as S from './style';
import * as C from '../../components';
import { Link } from 'react-router-dom';
import { JOB_DATA } from '../../constant/jobData';
import { useRecoilValue } from 'recoil';
import { IsLoginInfo } from '../../atoms/atoms';
import { useEffect, useState } from 'react';

const JobPage = () => {
  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('JOB_DATA');
    if (storedData) {
      setJobData(JSON.parse(storedData));
    } else {
      setJobData(JOB_DATA);
    }
  }, []);

  return (
    <S.Job>
      <C.Header />
      <S.JobWrapper>
        <S.JobTitleWrapper>
          <S.JobTitle>취업진로부</S.JobTitle>
          <S.ButtonContainer>
            {isLoginInfo.role === 'teacher' && (
              <Link to='/jobwrite'>
                <S.Button>글 등록하기</S.Button>
              </Link>
            )}
            <C.FieldLink />
          </S.ButtonContainer>
        </S.JobTitleWrapper>
        <S.JobContent>
          {jobData.map((Job) => (
            <Link key={Job.id} to={`/job/${Job.id}`}>
              <S.JobItem>
                <img src={Job.img} alt='채용 공고 이미지' />
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
