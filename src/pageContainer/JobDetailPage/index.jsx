import * as S from './style';
import * as A from '../../assets/svg';
import * as C from '../../components';
import TestImg from '../../assets/png/BackGround.png';
import { useNavigate, useParams } from 'react-router-dom';

const JobDetail = () => {
  const jobs = [
    {
      id: '1',
      name: '(주)비바리퍼블리카',
      major: 'Front-End 개발자',
      title: '웹 프론트엔드 개발자 채용 관련 공고',
      content:
        '프론트엔드 개발자 모집합니다. 관심있는 학생은 이명규 선생님께 디스코드 바랍니다.',
    },
    {
      id: '2',
      name: '(주)당근',
      major: 'UI/UX 디자이너',
      title: 'UIUX 디자이너 채용관련 공고',
      content:
        '당근마켓을 개발한 (주)당근 회사에서 우리 학교 디자이너를 채용하기를 희망합니다. 지원을 희망하는 학생들은 이명규 선생님께 디스코드 바랍니다.',
    },
  ];
  const { id } = useParams();
  const selectedJob = jobs.find((job) => job.id === id);
  const navigate = useNavigate();

  return (
    <S.JobDetail>
      <C.Header />
      <S.JobDetailContainer>
        <S.JobDetailWrapper>
          <img src={TestImg} alt='채용 공고 이미지' />
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
