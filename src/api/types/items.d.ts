export type ItemCreateDTO = {
  happen_at: string;
  amount: number;
  kind: 'expenses' | 'income';
  tag_id: string;
  tags_id?: string[];
};
export type ItemParams = {
  happen_at: string;
  happen_before: string;
  page: number;
};

export interface ItemDTO {
  id: number;
  user_id: number;
  amount: number;
  sign: string;
  tags_id: number[];
  happen_at: string;
  kind: 'expenses' | 'income';
}

export interface ItemResultDTO {
  itemsList: ItemDTO[];
  pager: {
    page: number;
    per_page: number;
    count: number;
  };
}
export interface BalanceDTO {
  balance: number;
  expenses: number;
  income: number;
}
