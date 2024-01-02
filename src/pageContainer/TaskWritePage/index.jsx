import { Header } from '../../components';
import * as S from './style';

const TaskWritePage = () => {
  return (
    <>
      <Header />
      <S.EmploymentWrapper>
        <S.EmploymentContainer>
          <S.TitleContainer>
            <S.FieldContainer>
              <S.Title>학년 선택</S.Title>
              <S.ButtonWrapper>
                <select>
                  <option value='Front-End Developer'>
                    학년을 선택해주세요
                  </option>
                  <option value='1'>1학년</option>
                  <option value='2'>2학년</option>
                  <option value='3'>3학년</option>
                </select>
              </S.ButtonWrapper>
            </S.FieldContainer>
            <S.LinkContainer>
              <S.Title>제목</S.Title>
              <S.Link placeholder='제목을 입력해주세요' />
            </S.LinkContainer>
            <S.DetailContentContainer>
              <S.Title>과제내용</S.Title>
              <S.DetailContentTextArea placeholder='과제에 대한 내용을 입력해 주세요.' />
            </S.DetailContentContainer>
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
              <S.MenuTitle>업로드</S.MenuTitle>
            </S.MenuTitleContainer>
          </S.TitleContainer>
        </S.EmploymentContainer>
      </S.EmploymentWrapper>
    </>
  );
};

export default TaskWritePage;
