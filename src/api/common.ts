import request from '@/config/request';
import { AxiosResponse } from 'axios';

export const getValidationCode = async (params: { email: string }) => {
  return request.post('/validation_codes', params);
};
export const signIn = async (params:{email: string, code: string}) => {
  return request.post<{jwt: string}>('/session', params);
}

export const meSession = async () => {
  return request.get<{id: number}>('/me');
}
export let me: Promise<AxiosResponse<{data: { id: number}}>>

export const refreshMe = () => {
  me = request.get<{data: {id: number}}>('/me');
  return me
}
export const fetchMe = refreshMe