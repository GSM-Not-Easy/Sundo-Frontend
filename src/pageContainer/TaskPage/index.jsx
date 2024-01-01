import * as S from './style';
import * as C from '../../components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TASK_DATA } from '../../constant/taskData';
import { useRecoilValue } from 'recoil';
import { IsLoginInfo } from '../../atoms/atoms';

const Task = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(TASK_DATA);
  const isLoginInfo = useRecoilValue(IsLoginInfo);

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
  };

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
  };

  useEffect(() => {
    filterTasks(selectedSubject, selectedGrade);
  }, [selectedSubject, selectedGrade]);

  const filterTasks = (subject, grade) => {
    if (subject === '' && grade === '') {
      setFilteredTasks(TASK_DATA);
    } else {
      const filtered = TASK_DATA.filter((task) => {
        return (
          (subject === '' || task.subject === subject) &&
          (grade === '' || task.grade === grade)
        );
      });
      setFilteredTasks(filtered);
    }
  };

  return (
    <S.Task>
      <C.Header />
      <S.TaskWrapper>
        <S.TitleWrapper>
          <S.Title>과제</S.Title>
          <S.ButtonWrapper>
            {isLoginInfo.role === 'teacher' && <S.Button>글 등록하기</S.Button>}
            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value=''>과목</option>
              <option value='SW'>SW</option>
              <option value='HW'>HW</option>
            </select>
            <select value={selectedGrade} onChange={handleGradeChange}>
              <option value=''>학년</option>
              <option value='1'>1학년</option>
              <option value='2'>2학년</option>
              <option value='3'>3학년</option>
            </select>
          </S.ButtonWrapper>
        </S.TitleWrapper>
        <S.TaskList>
          {filteredTasks.map((task, idx) => (
            <Link key={task.num} to={`/task/${task.num}`}>
              <S.TaskItem key={idx}>
                <S.TaskNum>{task.num}</S.TaskNum>
                <S.TaskTitle>{task.title}</S.TaskTitle>
                <S.TaskDate>
                  {task.startDate} ~ {task.endDate}
                </S.TaskDate>
              </S.TaskItem>
            </Link>
          ))}
        </S.TaskList>
      </S.TaskWrapper>
    </S.Task>
  );
};

export default Task;
