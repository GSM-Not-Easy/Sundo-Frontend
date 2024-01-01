import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import { useParams } from 'react-router-dom';
import { TASK_DATA } from '../../constant/taskData';
import { useRecoilValue } from 'recoil';
import { IsLoginInfo } from '../../atoms/atoms';

const TaskDetailPage = () => {
  const { id } = useParams();
  const selectedTask = TASK_DATA.find((task) => task.num === id);
  const isLoginInfo = useRecoilValue(IsLoginInfo);

  return (
    <S.TaskDetail>
      <C.Header />
      <S.TaskDetailContainer>
        <S.TaskDetailWrapper>
          <S.TaskDetailTitleWrapper>
            <S.TaskDetailTitle>{selectedTask.title}</S.TaskDetailTitle>
            {isLoginInfo.role === 'student' && (
              <S.SubmitButton>과제 제출하기</S.SubmitButton>
            )}
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
