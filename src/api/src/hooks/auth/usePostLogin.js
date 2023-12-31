import { useMutation } from '@tanstack/react-query';
import { authQueryKeys } from '../../libs/queryKeys';
import { post } from '../../libs/api';
import { authUrl } from '../../libs/urlController';
import { useNavigate } from 'react-router-dom';

export const usePostLogin = ({ setError }) => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: authQueryKeys.login(),
    mutationFn: (loginValues) => post(authUrl.login(), loginValues),
    onSuccess: ({ data }) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('accessExpiredAt', data.accessExp);
      localStorage.setItem('refreshExpiredAt', data.refreshExp);
      navigate('/');
    },
    onError: (error) => {
      if (error.response.status === 401) {
        setError('password', {
          type: 'custom',
          message: '비밀번호를 다시 입력해 주세요.',
        });
      }
      console.log(error);
    },
  });
};
