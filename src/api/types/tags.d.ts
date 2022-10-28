export interface TagDTO {
  id: number;
  user_id?: number;
  name: string;
  sign: string;
  kind: 'expenses' | 'income'
}
export interface TagResult {
  tagList: TagDTO[];
  pager: {
    page: number;
    per_page: number;
    count: number;
  }
}