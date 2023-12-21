import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import { useNavigate, useParams } from 'react-router-dom';

const TaskDetailPage = () => {
  const tasks = [
    {
      num: '1',
      title: '피그마프로토타이핑하기레전드스파이더맨티비오늘까지해오세용용용',
      startDate: '2023.12.31',
      endDate: '2024.01.01',
      subject: 'HW',
      grade: '3',
      content: '제출 기한 엄수',
      file: '보고서 양식.hsw',
    },
    {
      num: '2',
      title: '네트워크와 데이터베이스 과목 보고서 과제 제출',
      startDate: '2023.12.31',
      endDate: '2024.01.08',
      subject: 'SW',
      grade: '2',
      content: '본인이 원하는 주제 택1',
      file: '보고서 양식.hsw',
    },
  ];

  const { id } = useParams();
  const selectedTask = tasks.find((task) => task.num === id);
  const navigate = useNavigate();

  return (
    <S.TaskDetail>
      <C.Header />
      <S.TaskDetailContainer>
        <S.TaskDetailWrapper>
          <S.TaskDetailTitleWrapper>
            <S.TaskDetailTitle>{selectedTask.title}</S.TaskDetailTitle>
            <S.SubmitButton>과제 제출하기</S.SubmitButton>
          </S.TaskDetailTitleWrapper>
          <S.TaskDetailContent>{selectedTask.content}</S.TaskDetailContent>
          <S.DownloadButtonWrapper>
            <A.ClipIcon />
            <S.DownloadButton>{selectedTask.file}</S.DownloadButton>
          </S.DownloadButtonWrapper>
        </S.TaskDetailWrapper>
      </S.TaskDetailContainer>
    </S.TaskDetail>
  );
};

export default TaskDetailPage;
