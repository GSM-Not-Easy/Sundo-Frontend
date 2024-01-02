import { useForm } from 'react-hook-form';
import { Header } from '../../components';
import * as S from './style';
import { TASK_DATA } from '../../constant/taskData';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TildeIcon } from '../../assets/svg';

const TaskWritePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const storedData = localStorage.getItem('TASK_DATA');
    let newData = storedData ? JSON.parse(storedData) : [...TASK_DATA];

    const lastTask = newData[newData.length - 1];
    const newTaskNum = lastTask ? parseInt(lastTask.num) + 1 : 1;

    const updatedData = {
      num: newTaskNum.toString(),
      grade: data.grade || '',
      title: data.title || '',
      content: data.content || '',
      startDate: data.date1,
      endDate: data.date2,
      subject: data.subject,
      file: '보고서 양식.hwp',
    };

    newData.push(updatedData);
    localStorage.setItem('TASK_DATA', JSON.stringify(newData));

    navigate('/task');
    toast.success('글 등록이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <S.EmploymentWrapper>
        <S.EmploymentContainer>
          <S.TitleContainer>
            <S.FieldWrapper>
              <S.FieldContainer>
                <S.Title>학년 선택</S.Title>
                <S.ButtonWrapper>
                  <select {...register('grade', { required: true })}>
                    <option>학년을 선택해주세요</option>
                    <option value='1'>1학년</option>
                    <option value='2'>2학년</option>
                    <option value='3'>3학년</option>
                  </select>
                </S.ButtonWrapper>
              </S.FieldContainer>
              <S.FieldContainer>
                <S.Title>과목 선택</S.Title>
                <S.ButtonWrapper>
                  <select {...register('subject', { required: true })}>
                    <option>과목을 선택해주세요</option>
                    <option value='SW'>SW</option>
                    <option value='HW'>HW</option>
                  </select>
                </S.ButtonWrapper>
              </S.FieldContainer>
            </S.FieldWrapper>
            <S.LinkContainer>
              <S.Title>제목</S.Title>
              <S.Link
                placeholder='제목을 입력해주세요'
                {...register('title')}
              />
            </S.LinkContainer>
            <S.DetailContentContainer>
              <S.Title>과제내용</S.Title>
              <S.DetailContentTextArea
                placeholder='과제에 대한 내용을 입력해 주세요.'
                {...register('content')}
              />
            </S.DetailContentContainer>
            <S.DateContainer>
              <S.FieldContainer>
                <S.Title>제출 기간</S.Title>
                <S.ButtonWrapper>
                  <S.InputDate
                    placeholder='YYYY.MM.DD'
                    {...register('date1')}
                  />
                </S.ButtonWrapper>
              </S.FieldContainer>
              <div style={{ position: 'relative', top: '65px' }}>
                <TildeIcon />
              </div>
              <S.FieldContainer>
                <S.Title>ㅤ</S.Title>
                <S.ButtonWrapper>
                  <S.InputDate
                    placeholder='YYYY.MM.DD'
                    {...register('date2')}
                  />
                </S.ButtonWrapper>
              </S.FieldContainer>
            </S.DateContainer>
            <S.UploadContainer>
              <S.TitleContainer>
                <S.Title>이미지</S.Title>
                <S.UploadButton>파일업로드</S.UploadButton>
                <input type='file' style={{ display: 'none' }} />
                {/* <S.FileTitle>
                      신청서 파일.hwp <XIcon />
                    </S.FileTitle> */}
              </S.TitleContainer>
            </S.UploadContainer>
            <S.MenuTitleContainer>
              <S.MenuTitle>이전으로</S.MenuTitle>
              <S.MenuTitle onClick={handleSubmit(onSubmit)}>업로드</S.MenuTitle>
            </S.MenuTitleContainer>
          </S.TitleContainer>
        </S.EmploymentContainer>
      </S.EmploymentWrapper>
    </>
  );
};

export default TaskWritePage;
