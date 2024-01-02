import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import { useParams } from 'react-router-dom';
import { TASK_DATA } from '../../constant/taskData';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IsLoginInfo, IsTaskModal } from '../../atoms/atoms';
import { useEffect, useState } from 'react';

const TaskDetailPage = () => {
  const { id } = useParams();

  const isLoginInfo = useRecoilValue(IsLoginInfo);
  const [isTaskModal, setIsTaskModal] = useRecoilState(IsTaskModal);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('TASK_DATA');
    if (storedData) {
      const taskData = JSON.parse(storedData);
      const task = taskData.find((task) => task.num === id);
      if (task) {
        setSelectedTask(task);
      } else {
        console.log(`${id}에 해당하는 과제를 찾을 수 없습니다.`);
      }
    } else {
      const jobFromConstants = TASK_DATA.find((job) => job.num === id);
      if (jobFromConstants) {
        setSelectedTask(jobFromConstants);
      } else {
        console.log('로컬 스토리지와 상수에서 과제를 찾을 수 없습니다.');
      }
    }
  }, [id]);

  return (
    <S.TaskDetail>
      {isTaskModal && <C.TaskModal />}
      <C.Header />
      <S.TaskDetailContainer>
        <S.TaskDetailWrapper>
          {selectedTask && (
            <S.TaskDetailTitleWrapper>
              <S.TaskDetailTitle>{selectedTask.title}</S.TaskDetailTitle>
              {isLoginInfo.role === 'student' && (
                <S.SubmitButton onClick={() => setIsTaskModal((prev) => !prev)}>
                  과제 제출하기
                </S.SubmitButton>
              )}
            </S.TaskDetailTitleWrapper>
          )}
          {selectedTask && (
            <>
              <S.TaskDetailContent>{selectedTask.content}</S.TaskDetailContent>
              <S.DownloadButtonWrapper>
                <A.ClipIcon />
                <S.DownloadButton>{selectedTask.file}</S.DownloadButton>
              </S.DownloadButtonWrapper>
            </>
          )}
        </S.TaskDetailWrapper>
      </S.TaskDetailContainer>
    </S.TaskDetail>
  );
};

export default TaskDetailPage;
