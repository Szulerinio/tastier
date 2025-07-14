import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import ItemListElement from '../components/ItemListElement';
import DataContext from '../context/data-context';
import ButtonPrimary from '../components/ButtonPrimary';
import TextThemed from '../components/TextThemed';
import OverlayThemed_ItemList_sort from '../components/OverlayThemed_ItemList_sort';
import { Item, ItemsContextData } from '../types/models';

interface ListParams {
  category: string;
  name: string;
  tags: string[];
}

type RootStackParamList = {
  Home: undefined;
  List: ListParams;
  Item: { code: string };
  Filter: ListParams;
};

interface ItemListScreenProps {
  route: RouteProp<RootStackParamList, 'List'>;
  navigation: NavigationProp<RootStackParamList>;
}

interface ItemData {
  id: string;
  code: string;
  type: string;
  brand: string;
  name: string;
  category: string;
  description?: string;
  tags: string[];
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

const noAccent = (text: string): string => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const getNormalized = (text: string): string => {
  return noAccent(text.trim().toLowerCase());
};

const mapItemToItemData = (item: Item): ItemData => ({
  ...item,
  code: item.id,
  type: item.category,
  brand: item.name,
  rate: 0,
});

const ItemListScreen: React.FC<ItemListScreenProps> = ({ route, navigation }) => {
  const { params } = route;
  const [isSortAscending, setIsSortAscending] = useState(true);
  const [sortBy, setSortBy] = useState<keyof ItemData>('name');
  const ctx = useContext<ItemsContextData>(DataContext);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const handleSortPress = (newSortBy: string) => {
    setSortBy(newSortBy as keyof ItemData);
    toggleOverlay();
  };

  const printToPDF = async () => {
    const itemsHTML = sortItems(
      filter(ctx.items.map(mapItemToItemData), params),
      sortBy,
      isSortAscending
    )
      .map(item => {
        return `<tr>
          <td>${item.category}</td>
          <td>${item.name}</td>
          <td>${item.description || ''}</td>
          <td class="rating">${item.rate}</td>
          <td>${item.code}</td>
        </tr>`;
      })
      .join('');

    const html = `<html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }

          td,
          th {
            border: 1px solid black;
            width: 23%;
          }

          .rating {
            width: 8%;
          }
        </style>
      </head>
      <body style="text-align: center">
        <table>
          <thead>
            <tr>
              <th>category</th>
              <th>name</th>
              <th>description</th>
              <th class="rating">rating</th>
              <th>code</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
          </tbody>
        </table>
      </body>
    </html>`;

    const { uri } = await Print.printToFileAsync({ html });
    await shareAsync(uri, {
      UTI: '.pdf',
      mimeType: 'application/pdf',
    });
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    return <ItemListElement navigation={navigation as any} data={item} />;
  };

  const sortItems = (items: ItemData[], type: keyof ItemData, ascending: boolean): ItemData[] => {
    if (!type) {
      return items;
    }

    return [...items].sort((a, b) => {
      const aValue = a[type];
      const bValue = b[type];
      if (aValue === undefined || bValue === undefined) return 0;
      return ascending ? (aValue < bValue ? -1 : 1) : aValue > bValue ? -1 : 1;
    });
  };

  const filter = (data: ItemData[], filters: ListParams): ItemData[] => {
    return data.filter(item => {
      return (
        getNormalized(item.name).includes(getNormalized(filters.name)) &&
        getNormalized(item.category).includes(getNormalized(filters.category)) &&
        (filters.tags.length === 0 || filters.tags.every(tag => item.tags.includes(tag)))
      );
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ButtonPrimary
          buttonProps={{
            onPress: toggleOverlay,
          }}
          title="Sort"
        />
      ),
      headerRight: () => (
        <ButtonPrimary
          buttonProps={{
            onPress: () => navigation.navigate('Filter', { ...params }),
          }}
          title="Filter"
        />
      ),
    });
  }, [route.params, navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBar style="auto" />

      <FlatList
        style={{ width: '100%' }}
        data={sortItems(filter(ctx.items.map(mapItemToItemData), params), sortBy, isSortAscending)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<TextThemed>No items match the selected filters</TextThemed>}
      />

      <ButtonPrimary
        buttonProps={{
          onPress: printToPDF,
        }}
        title="Print to PDF"
      />
      <OverlayThemed_ItemList_sort
        visible={overlayVisible}
        toggleOverlay={toggleOverlay}
        onSortPress={handleSortPress}
      />
    </View>
  );
};

export default ItemListScreen;
