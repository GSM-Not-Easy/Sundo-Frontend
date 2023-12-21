import * as S from './style';
import * as C from '../../components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
  const tasks = [
    {
      num: '1',
      title: '피그마프로토타이핑하기레전드스파이더맨티비오늘까지해오세용용용',
      startDate: '2023.12.31',
      endDate: '2024.01.01',
      subject: 'HW',
      grade: '3',
    },
    {
      num: '2',
      title: '네트워크와 데이터베이스 과목 보고서 과제 제출',
      startDate: '2023.12.31',
      endDate: '2024.01.08',
      subject: 'SW',
      grade: '2',
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

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
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => {
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
