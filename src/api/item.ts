import request from '@/config/request';
import { ItemDTO, ItemCreateDTO, ItemParams, ItemResultDTO } from './types/items';

export const createItems = async (params: ItemCreateDTO) => {
  return request.post<ItemDTO>('/items', params);
};


export const getItems = async (params: ItemParams) => {
  return request.get<ItemResultDTO>('/items', params);
};
