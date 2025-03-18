export interface IResponse<T> {
  data: T;
  status?: string;
  message: string;
}
export interface IGetResponse<T> {
  data: T;
  status?: string;
  message: string;
  meta: metaIfo;
}
export interface metaIfo {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalNumberOfPages: number;
}
