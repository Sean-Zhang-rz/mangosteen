import request from '@/config/request';
import { User } from './types/common';

export const getValidationCode = async (params: { email: string }) => {
  return request.post('/validation_codes', params);
};
export const signIn = async (params: { email: string; code: string }) => {
  return request.post<{ jwt: string }>('/session', params);
};
