import request from '@/config/request';

export const getValidationCode = async (params: { email: string }) => {
  return request.post('/validation_codes', params);
};
