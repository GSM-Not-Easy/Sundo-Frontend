import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import { useParams } from 'react-router-dom';
import { TASK_DATA } from '../../constant/taskData';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IsLoginInfo, IsTaskModal } from '../../atoms/atoms';

const TaskDetailPage = () => {
  const { id } = useParams();
  const selectedTask = TASK_DATA.find((task) => task.num === id);
  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const [isTaskModal, setIsTaskModal] = useRecoilState(IsTaskModal);

  return (
    <S.TaskDetail>
      {isTaskModal && <C.TaskModal />}
      <C.Header />
      <S.TaskDetailContainer>
        <S.TaskDetailWrapper>
          <S.TaskDetailTitleWrapper>
            <S.TaskDetailTitle>{selectedTask.title}</S.TaskDetailTitle>
            {isLoginInfo.role === 'student' && (
              <S.SubmitButton onClick={() => setIsTaskModal((prev) => !prev)}>
                과제 제출하기
              </S.SubmitButton>
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
