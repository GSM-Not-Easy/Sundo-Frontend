import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import Girl from '../../assets/png/Girl.png';
import Boy from '../../assets/png/Boy.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const StuInfoPage = () => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [isFilter, setIsFilter] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    let stuInfo = {
      name: data.name,
      grade: selectedGrade,
      classNum: selectedClass,
    };

    console.log(stuInfo);
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const handleClassClick = (classNum) => {
    setSelectedClass(classNum);
  };

  const handleReset = () => {
    setSelectedClass(null);
    setSelectedGrade(null);
    reset();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsFilter(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        setIsFilter(false);
      }
    };

    if (isFilter) {
      window.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isFilter]);

  const students = [
    {
      classNum: '2209',
      name: '서주미',
      major: 'Front-End Develop',
    },
    {
      classNum: '2405',
      name: '김하온',
      major: 'UI/UX Designer',
    },
    {
      classNum: '2114',
      name: '임준성',
      major: 'Game Developer',
    },
    {
      classNum: '2116',
      name: '정윤서',
      major: 'iOS Developer',
    },
  ];

  return (
    <S.StuInfo>
      <C.Header />
      <S.Content>
        <S.TitleContainer>
          <S.TitleWrapper>
            <S.Title>학생정보</S.Title>
            <S.SubTitle>{students.length}명</S.SubTitle>
          </S.TitleWrapper>
          <S.FilterButton onClick={() => setIsFilter((prev) => !prev)}>
            <A.FilterIcon />
            필터
          </S.FilterButton>
          {isFilter && (
            <S.FilterWrapper ref={modalRef}>
              <S.FilterTitle>
                <S.FilterTitleText>
                  필터
                  <div onClick={() => handleReset()}>
                    <A.ResetIcon />
                  </div>
                </S.FilterTitleText>
                <div onClick={() => setIsFilter(false)}>
                  <A.XMark />
                </div>
              </S.FilterTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <S.InputWrapper>
                  <input
                    placeholder='이름을 입력해 주세요.'
                    {...register('name')}
                  />
                  <A.SearchIcon />
                </S.InputWrapper>
              </form>
              <S.Wrapper>
                <S.Label>학년</S.Label>
                <S.ButtonWrapper>
                  {[1, 2, 3].map((grade) => (
                    <S.Button
                      key={grade}
                      onClick={() => {
                        handleGradeClick(grade);
                        handleSubmit(onSubmit)();
                      }}
                      className={selectedGrade === grade ? 'selected' : ''}
                    >
                      {grade}
                    </S.Button>
                  ))}
                </S.ButtonWrapper>
                <S.Label>반</S.Label>
                <S.ButtonWrapper>
                  {[1, 2, 3, 4].map((classNum) => (
                    <S.Button
                      key={classNum}
                      onClick={() => {
                        handleClassClick(classNum);
                        handleSubmit(onSubmit)();
                      }}
                      className={selectedClass === classNum ? 'selected' : ''}
                    >
                      {classNum}
                    </S.Button>
                  ))}
                </S.ButtonWrapper>
              </S.Wrapper>
            </S.FilterWrapper>
          )}
        </S.TitleContainer>
        <S.StuList>
          {students.map((student, idx) =>
            idx % 2 === 0 ? (
              <S.StuItem key={idx}>
                <S.StuInfoSelect onClick={() => navigate(`/${student.name}`)}>
                  눌러서 이동 <A.NavigateIcon />
                </S.StuInfoSelect>
                <img src={Girl} alt='여학생' />
                <S.StuInfoContent>
                  <S.Name>{`${student.classNum} ${student.name}`}</S.Name>
                  <S.Major>{`${student.major}`}</S.Major>
                </S.StuInfoContent>
              </S.StuItem>
            ) : (
              <S.StuItem key={idx}>
                <S.StuInfoSelect onClick={() => navigate(`/${student.name}`)}>
                  눌러서 이동 <A.NavigateIcon />
                </S.StuInfoSelect>
                <img src={Boy} alt='남학생' />
                <S.StuInfoContent>
                  <S.Name>{`${student.classNum} ${student.name}`}</S.Name>
                  <S.Major>{`${student.major}`}</S.Major>
                </S.StuInfoContent>
              </S.StuItem>
            )
          )}
        </S.StuList>
      </S.Content>
    </S.StuInfo>
  );
};

export default StuInfoPage;
