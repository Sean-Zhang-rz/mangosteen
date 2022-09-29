import request from '@/config/request';

export const getValidationCode = async () => {
  request.get('/validation_codes');
};
