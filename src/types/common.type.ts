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

export interface GetGames {
  message: string,
  data: GameData[]
}
export interface GameData {
  id: number,
  gameId: number,
  index: number,
  title: string;
  description: string;
  availableInstructions: null,
  initialRegisterState: null,
  initialMemoryState: null,
  goal: null,
  maxInstructions: null,
  testCases: null,
  hints: null,
  solution: null,
  vedioUrl: null,
  overView: null,
  points: number,
  createdAt: string
  updatedAt: string
}