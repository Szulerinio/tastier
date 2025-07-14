export interface Item {
  code: string;
  type: string;
  brand: string;
  name: string;
  rate: number;
}

export interface ItemsContextData {
  items: Item[];
  editData: (item: Item) => void;
  deleteData: (item: Item) => void;
}

export interface DatabaseOperations {
  selectAndUpdateState: () => Item[];
  updateDatabase: (item: Item) => string;
  insertIntoDatabase: (item: Item) => string;
  checkIfInDatabase: (item: Pick<Item, 'code'>) => Item | undefined;
  deleteFromDatabase: (item: Pick<Item, 'code'>) => Promise<void>;
}
