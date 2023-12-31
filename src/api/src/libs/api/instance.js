import axios from 'axios';
import TokenManager from './TokenManager';

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

apiInstance.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager();

  // if (
  //   !tokenManager.validateToken(
  //     tokenManager.accessExpired,
  //     tokenManager.accessToken
  //   ) &&
  //   tokenManager.validateToken(
  //     tokenManager.refreshExpired,
  //     tokenManager.refreshToken
  //   )
  // ) {
  //   tokenManager.reissueToken();
  // } else if (
  //   !tokenManager.validateToken(
  //     tokenManager.accessExpired,
  //     tokenManager.accessToken
  //   ) &&
  //   !tokenManager.validateToken(
  //     tokenManager.refreshExpired,
  //     tokenManager.refreshToken
  //   )
  // )
  //   tokenManager.removeTokens();

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});
