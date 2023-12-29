import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.SUNDO_SERVER_URL,
  withCredentials: true,
});
