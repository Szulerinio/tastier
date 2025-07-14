import { Item } from './models';

export interface SQLiteRunResult {
  rowsAffected: number;
  insertId?: number;
}

export interface SQLiteDatabase {
  execSync(query: string): void;
  getAllSync(query: string, params?: unknown[]): Item[];
  getFirstSync(query: string, params?: unknown[]): Item | undefined;
  runSync(query: string, params?: unknown[]): void;
  runAsync(query: string, params?: unknown[]): Promise<SQLiteRunResult>;
}

export interface DatabaseOperations {
  getItem: (code: string) => Promise<Item | null>;
  getItems: (filters: Partial<Item>) => Promise<Item[]>;
  addItem: (item: Item) => Promise<void>;
  updateItem: (item: Item) => Promise<void>;
  deleteItem: (code: string) => Promise<void>;
}

export type DBOperationResult<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type DBQueryOptions = {
  limit?: number;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
};

// Common database operation types
export type DBFilter = {
  field: string;
  operator:
    | '=='
    | '!='
    | '>'
    | '<'
    | '>='
    | '<='
    | 'in'
    | 'not-in'
    | 'array-contains'
    | 'array-contains-any';
  value: any;
};

export type DBTransaction = {
  id: string;
  operations: DBOperation[];
  timestamp: Date;
};

export type DBOperation = {
  type: 'create' | 'update' | 'delete';
  collection: string;
  data: any;
  id?: string;
};
