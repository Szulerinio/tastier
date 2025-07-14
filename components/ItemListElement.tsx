import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import CardThemed from './CardThemed';
import TextThemed from './TextThemed';
import { Item } from '../types/models';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

interface ItemListElementProps {
  data: Item;
  navigation: NavigationProp<RootStackParamList>;
}

const ItemListElement: React.FC<ItemListElementProps> = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('Item', { item: data });
      }}
    >
      <CardThemed containerStyle={styles.card}>
        <Text style={styles.textContainer}>
          <TextThemed style={styles.text}>
            {type}
            {'\n'}
          </TextThemed>
          <TextThemed style={styles.text}>
            {brand} {'\n'}
          </TextThemed>
          <TextThemed style={styles.text}>
            {name} {'\n'}
          </TextThemed>
          <TextThemed style={styles.text}>Rate: {rate}</TextThemed>
        </Text>
      </CardThemed>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default ItemListElement;
