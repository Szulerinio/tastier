import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Item, ItemListFilters } from './models';

export type RootStackParamList = {
  Home: undefined;
  Scanner: undefined;
  Item: { item: Item } | undefined;
  ItemList: { params: ItemListFilters };
  Filters: { params: ItemListFilters };
  EditItem: { item: Item } | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ScannerScreenProps = NativeStackScreenProps<RootStackParamList, 'Scanner'>;
export type ItemScreenProps = NativeStackScreenProps<RootStackParamList, 'Item'>;
export type ItemListScreenProps = NativeStackScreenProps<RootStackParamList, 'ItemList'>;
export type FiltersScreenProps = NativeStackScreenProps<RootStackParamList, 'Filters'>;
export type EditItemScreenProps = NativeStackScreenProps<RootStackParamList, 'EditItem'>;
