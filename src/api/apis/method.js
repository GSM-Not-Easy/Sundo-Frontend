import { apiInstance } from './instance';

const del = async (...args) => {
  return await apiInstance.delete(...args);
};

const get = async (...args) => {
  return await apiInstance.get(...args);
};

const patch = async (...args) => {
  return await apiInstance.patch(...args);
};

const post = async (...args) => {
  return await apiInstance.post(...args);
};
