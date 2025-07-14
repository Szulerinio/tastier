import { SQLiteDatabase as ExpoSQLiteDatabase } from 'expo-sqlite';
import { Item } from './models';

export interface SQLiteRunResult {
  rowsAffected: number;
  insertId?: number;
}

// Custom database interface that includes only what we need
export interface SQLiteDatabase {
  execSync(query: string): void;
  getAllSync(query: string, params?: any[]): Item[];
  getFirstSync(query: string, params?: any[]): Item | undefined;
  runSync(query: string, params?: any[]): void;
  runAsync(query: string, params?: any[]): Promise<SQLiteRunResult>;
}

export interface DatabaseError {
  code: string;
  message: string;
}

export interface DatabaseQueryResult {
  success: boolean;
  error?: DatabaseError;
  data?: Item | Item[];
}

export interface DatabaseOperations {
  selectAndUpdateState: () => Item[];
  updateDatabase: (item: Item) => string;
  insertIntoDatabase: (item: Item) => string;
  checkIfInDatabase: (item: Pick<Item, 'code'>) => Item | undefined;
  deleteFromDatabase: (item: Pick<Item, 'code'>) => Promise<void>;
}
