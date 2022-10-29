export type ItemCreateDTO = {
  happen_at: string;
  amount: number;
  kind: 'expenses' | 'income';
  tag_id: string;
};

export interface ItemDTO {
  id: number;
  user_id: number;
  amount: number;
  tags_id: number[];
  happen_at: string;
  kind: 'expenses' | 'income';
}
