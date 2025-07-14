import React, { useState, useContext } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import AutocompleteLabeledTextInput from '../components/AutocompleteLabeledTextInput';
import LabeledTextInput from '../components/LabeledTextInput';
import DataContext from '../context/data-context';
import LabeledButtonGroup from '../components/LabeledButtonGroup';
import { Item, ItemsContextData } from '../types/models';

type RootStackParamList = {
  Home: undefined;
  List: {
    brand: string;
    name: string;
    rate: number[];
    type: string;
  };
  Item: { code: string };
};

interface EditItemScreenProps {
  route: RouteProp<RootStackParamList & { Edit: { code: string } }, 'Edit'>;
  navigation: NavigationProp<RootStackParamList>;
}

interface ItemValues {
  type: string;
  brand: string;
  name: string;
  rate: number;
}

const EditItemScreen: React.FC<EditItemScreenProps> = ({ route, navigation }) => {
  const scheme = useColorScheme();
  const { code } = route.params;
  const ctx = useContext<ItemsContextData>(DataContext);
  const temp = ctx.items.find(item => item.id === code);
  const { type = '', brand = '', name = '', rate = 0 } = (temp || {}) as Partial<ItemValues>;

  const [values, setValues] = useState<ItemValues>({ type, brand, name, rate });
  const [empty, setEmpty] = useState<keyof ItemValues | ''>('');

  const handleSave = async () => {
    // Check if fields are empty
    if (values.type.trim() === '') {
      setEmpty('type');
      return;
    }
    if (values.brand.trim() === '') {
      setEmpty('brand');
      return;
    }
    if (values.name.trim() === '') {
      setEmpty('name');
      return;
    }

    const newItem: Item = {
      id: code,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: values.type,
      tags: [],
      ...values,
    };

    if (!temp) {
      await ctx.createItem(newItem);
      const routes = [
        { name: 'Home' as const, params: undefined },
        {
          name: 'List' as const,
          params: {
            brand: '',
            name: '',
            rate: [],
            type: '',
          },
        },
        { name: 'Item' as const, params: { code } },
      ];
      navigation.reset({
        index: 1,
        routes,
      });
    } else {
      await ctx.updateItem({ id: code, ...values });
      navigation.navigate('Item', { code });
    }
  };

  const handleValueChange = (key: keyof ItemValues, value: string | number) => {
    if (empty === key) setEmpty('');
    setValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSave}>
          <Image
            style={styles.saveIcon}
            source={
              scheme === 'dark'
                ? require('../assets/saveLight.png')
                : require('../assets/saveDark.png')
            }
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSave]);

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <LabeledTextInput
        value={code}
        label="code"
        editable={false}
        maxLength={20}
        onChange={() => {}}
      />
      <AutocompleteLabeledTextInput
        value={values.type}
        label="type"
        onChange={(value: string) => handleValueChange('type', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.category)))}
        maxLength={20}
      />
      <AutocompleteLabeledTextInput
        value={values.brand}
        label="brand"
        onChange={(value: string) => handleValueChange('brand', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.name)))}
        maxLength={20}
      />
      <AutocompleteLabeledTextInput
        value={values.name}
        label="name"
        onChange={(value: string) => handleValueChange('name', value)}
        maxLength={40}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.name)))}
      />
      <LabeledButtonGroup
        label="rate"
        selectedIndexes={values.rate}
        onChange={(value: number | number[]) => handleValueChange('rate', value as number)}
      />
      {empty && <Text style={styles.errorEmptyText}>{empty} cannot be empty</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorEmptyText: {
    color: 'red',
    padding: 15,
    alignSelf: 'center',
  },
  saveIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default EditItemScreen;
