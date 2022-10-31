import request from '@/config/request';
import { ItemDTO, ItemCreateDTO, ItemParams, ItemResultDTO, BalanceDTO } from './types/items';

export const createItems = async (params: ItemCreateDTO) => {
  return request.post<ItemDTO>('/items', params);
};

export const getItems = async (params: ItemParams) => {
  return request.get<ItemResultDTO>('/items', params);
};

export const getBalance = async (params: ItemParams) => {
  return request.get<BalanceDTO>('/items/balance', params);
};
