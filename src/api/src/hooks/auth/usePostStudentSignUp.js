import { useMutation } from '@tanstack/react-query';
import { authQueryKeys } from '../../libs/queryKeys';
import { post } from '../../libs/api';
import { authUrl } from '../../libs/urlController';
import { useSetRecoilState } from 'recoil';
import { Step } from '../../../../atoms/atoms';

export const usePostStudentSignUp = () => {
  const setStep = useSetRecoilState(Step);
  return useMutation({
    mutationKey: authQueryKeys.signUpStudent(),
    mutationFn: (studentSignUpValues) =>
      post(authUrl.signUpStudent(), studentSignUpValues),
    onSuccess: () => {
      setStep('회원가입완료');
    },
    onError: (error) => console.log(error),
  });
};
