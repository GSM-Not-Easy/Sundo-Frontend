import { instance } from './instance';

export const del = async (...args) => await instance.delete(...args);

export const get = async (...args) => await instance.get(...args);

export const patch = async (...args) => await instance.patch(...args);

export const post = async (...args) => await instance.post(...args);
