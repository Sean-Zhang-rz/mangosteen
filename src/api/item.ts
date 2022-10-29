import request from '@/config/request';
import { ItemDTO, ItemCreateDTO } from './types/items';

export const createItems = async (params: ItemCreateDTO) => {
  return request.post<ItemDTO>('/items', params);
};
