import { useEffect, useRef } from 'react';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { IsTaskModal } from '../../atoms/atoms';
import * as A from '../../assets/svg';
import { toast } from 'react-toastify';

const TaskModal = () => {
  const modalRef = useRef(null);
  const [isTaskModal, setIsTaskModal] = useRecoilState(IsTaskModal);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsTaskModal(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsTaskModal(false);
      }
    };

    if (isTaskModal) {
      window.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isTaskModal]);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    setIsTaskModal(false);
    toast.success('제출에 성공했습니다.');
  };

  return (
    <S.Container>
      <S.Modal ref={modalRef}>
        <S.TitleContainer>
          <S.Title>과제제출</S.Title>
          <A.XMark />
        </S.TitleContainer>
        <S.UploadBox onClick={handleUploadClick}>
          <input
            type='file'
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <A.CameraIcon />
          <span>과제를 업로드 해주세요.</span>
        </S.UploadBox>
      </S.Modal>
    </S.Container>
  );
};

export default TaskModal;
