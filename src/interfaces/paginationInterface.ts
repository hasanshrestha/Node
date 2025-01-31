import { SortEnum } from '../enums';


export interface PaginationExtend {
  offset: number;
  limit: number;
}

export interface OrderExtend {
  sort?: SortEnum;
  order?: string;
}

export interface SearchExtend {
  query?: string;
}

export interface PaginationOrderSearchExtend extends PaginationExtend, OrderExtend, SearchExtend { }

export interface CursorPaginationExtend {
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  cursor?:string;
  limit?: number;
  cursorSort?: SortEnum;
  cursorOrder?: string;
  withCursor?: boolean;
}

export interface CursorInterface {
  cursor: string;
  node: object;
}

export interface CursorInputInterface {
  count: number;
  cursorCount: number;
  cursorOrder?: string;
  rows: any[];
  cursor?: string;
  limit?: number;
  before?: string;
}

export interface PageInfoInterface {
  count?: number;
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
}

export interface CursorPaginationOrderSearchExtend extends CursorPaginationExtend, SearchExtend, OrderExtend { }

export interface InputCursorInterface {
  count: number;
  cursorCount: number;
  cursor?: string;
  cursorOrder: string;
  rows: any[];
  order?: string;
}