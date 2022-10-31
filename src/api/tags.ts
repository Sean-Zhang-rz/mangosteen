import request from '@/config/request';
import { TagResult } from './types/tags';

export const getTags = async (params: { kind: string, page?: number }) => {
  // return request.get<TagResult>('/tags', params);
  return new Promise((res) => {
    res({
      tagList: params.kind === 'expenses' ? [
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
    ],
    pager:{
          page: 1,
    per_page: 25,
    count: 26
    }
    })
  }) as Promise<TagResult>
};
