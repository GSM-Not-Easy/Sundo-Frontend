import { useRecoilState } from 'recoil';
import { Step } from '../../atoms/atoms';
import * as P from '../';

const SignUpPage = () => {
  const [step, setStep] = useRecoilState(Step);
  return (
    <div>
      {step === '역할선택' && <P.RoleSelectPage />}
      {step === '학생정보입력' && <P.StudentInfoPage />}
      {step === '선생님정보입력' && <P.TeacherInfoPage />}
      {step === '정보입력' && <P.EnterInfoPage />}
      {step === '회원가입완료' && <P.SuccessPage />}
    </div>
  );
};

export default SignUpPage;
