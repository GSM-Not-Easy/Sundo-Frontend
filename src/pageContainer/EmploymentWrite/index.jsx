import * as S from './style';
import { Header } from '../../components';
import { useRef, useState } from 'react';
import { UploadIcon, XIcon } from '../../assets/svg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { JOB_DATA } from '../../constant/jobData';

const EmploymentWritePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    toast.success('파일 업로드에 성공했습니다.');
  };

  const onSubmit = (data) => {
    const storedData = localStorage.getItem('JOB_DATA');
    let newData = storedData ? JSON.parse(storedData) : [...JOB_DATA]; // 기존 데이터가 없을 때 JOB_DATA 사용

    const updatedData = {
      id: (newData.length > 0
        ? parseInt(newData[newData.length - 1].id) + 1
        : 1
      ).toString(),
      name: data.company,
      major: data.selectedSubject,
      title: data.title,
      content: data.detailContent,
      img: 'https://pbs.twimg.com/profile_images/1519730490919747584/aBNirN8-_400x400.jpg',
    };

    newData.push(updatedData);
    localStorage.setItem('JOB_DATA', JSON.stringify(newData));

    navigate('/job');
    toast.success('글 등록이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <S.EmploymentWrapper>
        <S.EmploymentContainer>
          <S.TitleInputsWrapper>
            <S.TitleContainer>
              <S.Title>제목</S.Title>
              <S.Input {...register('title')} />
            </S.TitleContainer>
            <S.JobContainer>
              <S.Title>기업명</S.Title>
              <S.Input {...register('company')} />
            </S.JobContainer>
          </S.TitleInputsWrapper>
          <S.TitleContainer>
            <S.FieldContainer>
              <S.Title>분야선택</S.Title>
              <S.ButtonWrapper>
                <select
                  value={selectedSubject}
                  onChange={handleSubjectChange}
                  {...register('selectedSubject')}
                >
                  <option value='Front-End Developer'>
                    Front-End Developer
                  </option>
                  <option value='Back-End Developer'>Back-End Developer</option>
                  <option value='Design'>Design</option>
                  <option value='iOS Developer'>iOS Develope</option>
                  <option value='Android Developer'>Android Developer</option>
                  <option value='DevOps'>DevOps</option>
                </select>
              </S.ButtonWrapper>
            </S.FieldContainer>
            <S.DetailContentContainer>
              <S.Title>상세내용</S.Title>
              <S.DetailContentTextArea
                placeholder='과제에 대한 내용을 입력해 주세요.'
                {...register('detailContent')}
              />
            </S.DetailContentContainer>
            <S.UploadContainer>
              <S.TitleContainer>
                <S.Title>이미지</S.Title>
                <S.UploadButton onClick={handleUploadClick}>
                  이미지업로드
                </S.UploadButton>
                <input
                  type='file'
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {/* <S.FileTitle>
                  신청서 파일.hwp <XIcon />
                </S.FileTitle> */}
              </S.TitleContainer>
              <S.JobContainer>
                <S.Title>파일업로드</S.Title>
                <S.UploadButton onClick={handleUploadClick}>
                  파일업로드
                </S.UploadButton>
                {/* 파일 선택 시에 handleFileChange 호출 */}
                <input
                  type='file'
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {/* <S.FileTitle>
                  신청서 파일.hwp
                  <XIcon />
                </S.FileTitle> */}
              </S.JobContainer>
            </S.UploadContainer>
            <S.MenuTitleContainer>
              <Link to='/job'>
                <S.MenuTitle>이전으로</S.MenuTitle>
              </Link>
              <S.MenuTitle onClick={handleSubmit(onSubmit)}>업로드</S.MenuTitle>
            </S.MenuTitleContainer>
          </S.TitleContainer>
        </S.EmploymentContainer>
      </S.EmploymentWrapper>
    </>
  );
};

export default EmploymentWritePage;
