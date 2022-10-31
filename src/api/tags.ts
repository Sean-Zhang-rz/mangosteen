import request from '@/config/request';
import { TagDTO, TagResult } from './types/tags';

export const getTags = async (params: { kind: string; page: number }) => {
  return request.get<TagResult>('/tags', params);
};
export const getTag = async (params: { id: number }) => {
return request.get<TagDTO>(`/tags/${params.id}`);
}
export const createTag = async (params: TagDTO) => {
  return request.post('/tags', params);
};
