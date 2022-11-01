import request from '@/config/request';
import { User } from './types/common';

export const getValidationCode = async (params: { email: string }) => {
  return request.post('/validation_codes', params);
};
export const signIn = async (params: { email: string; code: string }) => {
  return request.post<{ jwt: string }>('/session', params);
};

export const meSession = async () => {
  return request.get<User>('/me');
};
export let me: Promise<{ data: User }>;

export const refreshMe = () => {
  me = request.get<User>('/me');
  return me;
};
export const fetchMe = refreshMe;
