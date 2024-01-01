import * as S from './style';
import { Header } from '../../components';
import { useState } from 'react';
import { UploadIcon, XIcon } from '../../assets/svg';

const EmploymentWritePage = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
  };

  return (
    <>
      <Header />
      <S.EmploymentWrapper>
        <S.EmploymentContainer>
          <S.TitleInputsWrapper>
            <S.TitleContainer>
              <S.Title>제목</S.Title>
              <S.Input />
            </S.TitleContainer>
            <S.JobContainer>
              <S.Title>기업명</S.Title>
              <S.Input />
            </S.JobContainer>
          </S.TitleInputsWrapper>
          <S.TitleContainer>
            <S.FieldContainer>
              <S.Title>분야선택</S.Title>
              <S.ButtonWrapper>
                <select value={selectedSubject} onChange={handleSubjectChange}>
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
              <S.DetailContentTextArea placeholder='과제에 대한 내용을 입력해 주세요.' />
            </S.DetailContentContainer>
            <S.UploadContainer>
              <S.TitleContainer>
                <S.Title>이미지</S.Title>
                <S.UploadButton>이미지업로드</S.UploadButton>
                <S.FileTitle>
                  신청서 파일.hwp <XIcon />
                </S.FileTitle>
              </S.TitleContainer>
              <S.JobContainer>
                <S.Title>파일업로드</S.Title>
                <S.UploadButton>파일업로드</S.UploadButton>
                <S.FileTitle>
                  신청서 파일.hwp
                  <XIcon />
                </S.FileTitle>
              </S.JobContainer>
            </S.UploadContainer>
            <S.MenuTitleContainer>
              <S.MenuTitle>이전으로</S.MenuTitle>
              <S.MenuTitle>업로드</S.MenuTitle>
            </S.MenuTitleContainer>
          </S.TitleContainer>
        </S.EmploymentContainer>
      </S.EmploymentWrapper>
    </>
  );
};

export default EmploymentWritePage;
