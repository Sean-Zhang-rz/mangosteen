import request from '@/config/request';

export const getValidationCode = async (params: { email: string }) => {
  request.post('/validation_codes', params);
};
