export interface TagDTO {
  id: number;
  user_id?: number;
  name: string;
  sign: string;
  kind: 'expenses' | 'income'
}