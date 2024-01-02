import * as S from './style';
import * as A from '../../../assets/svg';
import { useSetRecoilState } from 'recoil';
import { IsStudent, Step } from '../../../atoms/atoms';

const RoleSelectPage = () => {
  const setStep = useSetRecoilState(Step);
  const setIsStudnet = useSetRecoilState(IsStudent);

  return (
    <S.SignUp>
      <S.SignUpContainer>
        <S.SignUpTitle>
          <A.SignUpLogo width={186} height={70} />
          <S.SignUpText>GSM 선생님 도우미 서비스, 선도</S.SignUpText>
        </S.SignUpTitle>
        <S.RoleSelectWrapper>
          <S.RoleSelectItem
            onClick={() => {
              setStep('학생정보입력');
              setIsStudnet(true);
            }}
          >
            <A.StudentIcon />
            <S.RoleSelectText>학생으로 가입하기</S.RoleSelectText>
          </S.RoleSelectItem>
          <S.RoleSelectItem
            onClick={() => {
              setStep('선생님정보입력');
              setIsStudnet(false);
            }}
          >
            <A.TeacherIcon />
            <S.RoleSelectText>선생님으로 가입하기</S.RoleSelectText>
          </S.RoleSelectItem>
        </S.RoleSelectWrapper>
      </S.SignUpContainer>
    </S.SignUp>
  );
};

export default RoleSelectPage;
