import React from 'react';
import { Item, ItemsContextData } from '../types/models';

const defaultContext: ItemsContextData = {
  items: [
    {
      code: '0',
      type: 'Piwo',
      brand: 'Beczkowe',
      name: 'mocne wiśnia 9%',
      rate: 5,
    },
  ],
  editData: () => {},
  deleteData: () => {},
};

const DataContext = React.createContext<ItemsContextData>(defaultContext);

export default DataContext;
