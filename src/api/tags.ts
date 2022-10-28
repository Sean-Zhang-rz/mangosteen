import request from '@/config/request';
import { TagDTO } from './types/tags';

export const getTags = async (params: { kind: string }) => {
  // return request.get<TagDTO[]>('/tags', params);
  return new Promise((res) => {
    res(params.kind === 'expenses' ? [
      { id: 1, name: '餐费', sign: '￥', kind: 'expenses' },
      { id: 2, name: '打车', sign: '￥', kind: 'expenses' },
      { id: 3, name: '聚餐', sign: '￥', kind: 'expenses' },
      { id: 4, name: '打车', sign: '￥', kind: 'expenses' },
      { id: 5, name: '聚餐', sign: '￥', kind: 'expenses' },
      { id: 6, name: '打车', sign: '￥', kind: 'expenses' },
      { id: 7, name: '聚餐', sign: '￥', kind: 'expenses' },
    ]:[
      { id: 4, name: '工资', sign: '￥', kind: 'income' },
      { id: 5, name: '彩票', sign: '￥', kind: 'income' },
      { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 11, name: '彩票', sign: '￥', kind: 'income' },
      { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 17, name: '彩票', sign: '￥', kind: 'income' },
      { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 4, name: '工资', sign: '￥', kind: 'income' },
      { id: 5, name: '彩票', sign: '￥', kind: 'income' },
      { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 11, name: '彩票', sign: '￥', kind: 'income' },
      { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 17, name: '彩票', sign: '￥', kind: 'income' },
      { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 4, name: '工资', sign: '￥', kind: 'income' },
      { id: 5, name: '彩票', sign: '￥', kind: 'income' },
      { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 11, name: '彩票', sign: '￥', kind: 'income' },
      { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 17, name: '彩票', sign: '￥', kind: 'income' },
      { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 4, name: '工资', sign: '￥', kind: 'income' },
      { id: 5, name: '彩票', sign: '￥', kind: 'income' },
      { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 11, name: '彩票', sign: '￥', kind: 'income' },
      { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 17, name: '彩票', sign: '￥', kind: 'income' },
      { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 4, name: '工资', sign: '￥', kind: 'income' },
      { id: 5, name: '彩票', sign: '￥', kind: 'income' },
      { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 11, name: '彩票', sign: '￥', kind: 'income' },
      { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
      { id: 17, name: '彩票', sign: '￥', kind: 'income' },
      { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
    ])
  }) as Promise<TagDTO[]>
};
