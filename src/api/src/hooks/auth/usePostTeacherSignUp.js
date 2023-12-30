import { useSetRecoilState } from 'recoil';
import { Step } from '../../../../atoms/atoms';
import { useMutation } from '@tanstack/react-query';
import { authQueryKeys } from '../../libs/queryKeys';
import { post } from '../../libs/api';
import { authUrl } from '../../libs/urlController';

export const usePostTeacherSignUp = () => {
  const setStep = useSetRecoilState(Step);
  return useMutation({
    mutationKey: authQueryKeys.signUpTeacher(),
    mutationFn: (teacherSignUpValues) =>
      post(authUrl.signUpTeacher(), teacherSignUpValues),
    onSuccess: () => {
      setStep('회원가입완료');
    },
    onError: (error) => console.log(error),
  });
};
