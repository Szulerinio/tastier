import { PropsWithChildren } from 'react';
import { Item, ItemsContextData } from './models';

export interface DataProviderProps extends PropsWithChildren {}

export interface DataContextType extends ItemsContextData {
  items: Item[];
  editData: (item: Item) => void;
  deleteData: (item: Item) => void;
}

// Utility type for filtering
export interface FilterOptions {
  type?: string;
  brand?: string;
  minRate?: number;
  maxRate?: number;
}

// Form state types
export interface ItemFormState {
  code: string;
  type: string;
  brand: string;
  name: string;
  rate: number;
  isValid: boolean;
  errors: {
    code?: string;
    type?: string;
    brand?: string;
    name?: string;
    rate?: string;
  };
}
