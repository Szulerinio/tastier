// Base Item type
export interface Item {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  category: string;
  tags: string[];
}

// For creating new items (omitting auto-generated fields)
export type CreateItemInput = Omit<Item, 'id' | 'createdAt' | 'updatedAt'>;

// For updating items (all fields optional except id)
export type UpdateItemInput = Partial<Omit<Item, 'id'>> & { id: string };

// For read-only fields
export type ReadOnlyItem = Readonly<Item>;

// For list responses
export type ItemList = {
  items: ReadOnlyItem[];
  totalCount: number;
  hasMore: boolean;
};

// For item responses
export type ItemResponse = {
  item: ReadOnlyItem;
  relatedItems?: ReadOnlyItem[];
};

// For batch operations
export type BatchItemOperation = {
  items: (CreateItemInput | UpdateItemInput)[];
  operation: 'create' | 'update' | 'delete';
};

export interface ItemsContextData {
  items: Item[];
  loading: boolean;
  error: string | null;
  getItem: (id: string) => Promise<Item | null>;
  createItem: (item: CreateItemInput) => Promise<Item>;
  updateItem: (item: UpdateItemInput) => Promise<Item>;
  deleteItem: (id: string) => Promise<void>;
  searchItems: (query: string) => Promise<Item[]>;
  filterItems: (category: string) => Promise<Item[]>;
}

export interface DatabaseOperations {
  selectAndUpdateState: () => Item[];
  updateDatabase: (item: Item) => string;
  insertIntoDatabase: (item: Item) => string;
  checkIfInDatabase: (item: Pick<Item, 'id'>) => Item | undefined;
  deleteFromDatabase: (item: Pick<Item, 'id'>) => Promise<void>;
}

// Sorting types
export type SortableItemFields = keyof Pick<Item, 'name' | 'category' | 'createdAt' | 'updatedAt'>;

export interface SortOptions {
  sortBy: SortableItemFields | '';
  isSortAscending: boolean;
}

export interface ItemListFilters {
  category: string;
  name: string;
  tags: string[];
}
