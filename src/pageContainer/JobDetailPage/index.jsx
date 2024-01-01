import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { JOB_DATA } from '../../constant/jobData';
import { useEffect, useState } from 'react';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('JOB_DATA');
    if (storedData) {
      const jobData = JSON.parse(storedData);
      const job = jobData.find((job) => job.id === id);
      setSelectedJob(job);
    }
  }, [id]);

  if (!selectedJob) {
    return <div>로딩 중...</div>;
  }
  return (
    <S.JobDetail>
      <C.Header />
      <S.JobDetailContainer>
        <S.JobDetailWrapper>
          <img src={selectedJob.img} alt='채용 공고 이미지' />
          <S.JobDetailContent>
            <S.JobCompanyName>{selectedJob.name}</S.JobCompanyName>
            <S.TitleWrapper>
              <S.Title>{selectedJob.title}</S.Title>
              <S.Major>{selectedJob.major}</S.Major>
            </S.TitleWrapper>
            <S.Content>{selectedJob.content}</S.Content>
          </S.JobDetailContent>
          <S.ButtonContainer>
            <S.DownloadButtonWrapper>
              <A.ClipIcon />
              <S.DownloadButton>신청서 파일.hsw</S.DownloadButton>
            </S.DownloadButtonWrapper>
            <S.BackButton onClick={() => navigate('/job')}>
              이전으로
            </S.BackButton>
          </S.ButtonContainer>
        </S.JobDetailWrapper>
      </S.JobDetailContainer>
    </S.JobDetail>
  );
};

export default JobDetail;
