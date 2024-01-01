import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { JOB_DATA } from '../../constant/jobData';

const JobDetail = () => {
  const { id } = useParams();
  const selectedJob = JOB_DATA.find((job) => job.id === id);
  const navigate = useNavigate();

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
