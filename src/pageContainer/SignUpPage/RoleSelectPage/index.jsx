import * as S from './style';
import * as A from '../../../assets/svg';
import { useRecoilState } from 'recoil';
import { Step } from '../../../atoms/atoms';

const RoleSelectPage = () => {
  const [step, setStep] = useRecoilState(Step);

  return (
    <S.SignUp>
      <S.SignUpContainer>
        <S.SignUpTitle>
          <A.SignUpLogo width={186} height={70} />
          <S.SignUpText>GSM 선생님 통합 관리 서비스, 선도</S.SignUpText>
        </S.SignUpTitle>
        <S.RoleSelectWrapper>
          <S.RoleSelectItem onClick={() => setStep('정보입력')}>
            <A.StudentIcon />
            <S.RoleSelectText>학생으로 가입하기</S.RoleSelectText>
          </S.RoleSelectItem>
          <S.RoleSelectItem onClick={() => setStep('선생님정보입력')}>
            <A.TeacherIcon />
            <S.RoleSelectText>선생님으로 가입하기</S.RoleSelectText>
          </S.RoleSelectItem>
        </S.RoleSelectWrapper>
      </S.SignUpContainer>
    </S.SignUp>
  );
};

export default RoleSelectPage;
