import React, { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import DataContext from './data-context';
import { Item } from '../types/models';
import { DataProviderProps } from '../types/context';
import { SQLiteDatabase } from '../types/database';

const db = SQLite.openDatabaseSync('db.testDb') as unknown as SQLiteDatabase;

const dummyData: Item[] = [
  {
    code: '0',
    type: 'Piwo',
    brand: 'Beczkowe',
    name: 'mocne wiśnia 9%',
    rate: 5,
  },
  {
    code: '1',
    type: 'Piwo',
    brand: 'Beczkowe',
    name: 'mocne wiśnia 9%',
    rate: 4,
  },
];

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [itemsDataState, setItemsDataState] = useState<Item[]>(dummyData);

  useEffect(() => {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS items (code INTEGER, type TEXT, brand TEXT, name TEXT, rate INTEGER);
    `);
    setItemsDataState(db.getAllSync('SELECT * FROM items'));
  }, []);

  const selectAndUpdateState = (): Item[] => {
    const rows = db.getAllSync('SELECT * FROM items;');
    setItemsDataState(rows);
    return rows;
  };

  const updateDatabase = (item: Item): string => {
    db.runSync('UPDATE items SET type=?, brand=?, name=?, rate=? WHERE code = ?;', [
      item.type.trim(),
      item.brand.trim(),
      item.name.trim(),
      item.rate,
      item.code,
    ]);
    return 'Done';
  };

  const insertIntoDatabase = (item: Item): string => {
    db.runSync('INSERT INTO items (code, type, brand, name, rate) VALUES (?,?,?,?,?)', [
      item.code.trim(),
      item.type.trim(),
      item.brand.trim(),
      item.name,
      item.rate,
    ]);
    return 'Done';
  };

  const checkIfInDatabase = (item: Pick<Item, 'code'>): Item | undefined => {
    return db.getFirstSync('SELECT * FROM items WHERE code = ?', [item.code]);
  };

  const deleteFromDatabase = async (item: Pick<Item, 'code'>): Promise<void> => {
    await db.runAsync('DELETE FROM items WHERE code = ?', [item.code]);
  };

  const editDataHandler = (item: Item): void => {
    const existingItem = checkIfInDatabase(item);
    if (existingItem) {
      updateDatabase(item);
    } else {
      insertIntoDatabase(item);
    }
    selectAndUpdateState();
  };

  const deleteDataHandler = async (item: Item): Promise<void> => {
    const existingItem = checkIfInDatabase(item);
    if (existingItem) {
      await deleteFromDatabase(item);
    }
    selectAndUpdateState();
  };

  const contextValue = {
    items: itemsDataState,
    editData: editDataHandler,
    deleteData: deleteDataHandler,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export default DataProvider;
