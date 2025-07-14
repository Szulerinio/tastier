import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import CardThemed from './CardThemed';
import TextThemed from './TextThemed';

interface ItemData {
  code: string;
  type: string;
  brand: string;
  name: string;
  rate: number;
}

interface ItemListElementProps {
  data: ItemData;
  navigation: NavigationProp<any>;
}

const ItemListElement: React.FC<ItemListElementProps> = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        navigation.navigate('Item', { code });
      }}
    >
      <CardThemed containerStyle={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          <TextThemed>
            {type}
            {'\n'}
          </TextThemed>
          <TextThemed>
            {brand} {'\n'}
          </TextThemed>
          <TextThemed>
            {name} {'\n'}
          </TextThemed>
          <TextThemed>Rate: {rate}</TextThemed>
        </Text>
      </CardThemed>
    </Pressable>
  );
};

export default ItemListElement;
