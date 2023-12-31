import { apiInstance } from './instance';

export const del = async (...args) => {
  return await apiInstance.delete(...args);
};

export const get = async (...args) => {
  return await apiInstance.get(...args);
};

export const patch = async (...args) => {
  return await apiInstance.patch(...args);
};

export const post = async (...args) => {
  return await apiInstance.post(...args);
};
