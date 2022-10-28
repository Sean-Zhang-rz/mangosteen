import request from '@/config/request';
import { TagDTO } from './types/tags';

export const getTags = async (params: { kind: string }) => {
  return request.get<TagDTO[]>('/tags', params);
};
