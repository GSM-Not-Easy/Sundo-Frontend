import axios from 'axios';
import EnvConfig from './envConfig';

export const apiAxios = axios.create({
  baseURL: EnvConfig.SUNDO_SERVER_URL,
  withCredentials: true,
});
