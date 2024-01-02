import { useRecoilValue } from 'recoil';
import { Step } from '../../atoms/atoms';
import { useForm } from 'react-hook-form';
import * as P from '../';

const SignUpPage = () => {
  const step = useRecoilValue(Step);
  const signUpForm = useForm();
  return (
    <div>
      {step === '역할선택' && <P.RoleSelectPage />}
      {step === '학생정보입력' && <P.StudentInfoPage useForm={signUpForm} />}
      {step === '선생님정보입력' && <P.TeacherInfoPage useForm={signUpForm} />}
      {step === '정보입력' && <P.EnterInfoPage useForm={signUpForm} />}
      {step === '학생자기소개' && <P.ProfilePage />}
      {step === '회원가입완료' && <P.SuccessPage />}
    </div>
  );
};

export default SignUpPage;
