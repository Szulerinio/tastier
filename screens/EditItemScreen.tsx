import React, { useState, useContext } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import AutocompleteLabeledTextInput from '../components/AutocompleteLabeledTextInput';
import LabeledTextInput from '../components/LabeledTextInput';
import DataContext from '../context/data-context';
import LabeledButtonGroup from '../components/LabeledButtonGroup';
import { EditItemScreenProps } from '../types/navigation';
import { DataContextType } from '../types/context';
import { Item } from '../types/models';

interface FormValues {
  type: string;
  brand: string;
  name: string;
  rate: number;
}

const MAX_LENGTH = {
  code: 20,
  type: 20,
  brand: 20,
  name: 40,
};

const EditItemScreen: React.FC<EditItemScreenProps> = ({ route, navigation }) => {
  const scheme = useColorScheme();
  const { item } = route.params || {};
  const ctx = useContext(DataContext) as DataContextType;

  const initialValues: FormValues = {
    type: item?.type || '',
    brand: item?.brand || '',
    name: item?.name || '',
    rate: item?.rate || 0,
  };

  const [values, setValues] = useState<FormValues>(initialValues);
  const [emptyField, setEmptyField] = useState<keyof FormValues | ''>('');

  const handleSave = async () => {
    // Check if fields are empty
    if (values.type.trim() === '') {
      setEmptyField('type');
      return;
    }
    if (values.brand.trim() === '') {
      setEmptyField('brand');
      return;
    }
    if (values.name.trim() === '') {
      setEmptyField('name');
      return;
    }

    const updatedItem: Item = {
      code: item?.code || '',
      ...values,
    };

    await ctx.editData(updatedItem);

    if (!item) {
      // If this is a new item, reset navigation stack
      navigation.reset({
        index: 1,
        routes: [
          { name: 'Home' },
          {
            name: 'ItemList',
            params: {
              params: {
                type: '',
                brand: '',
                name: '',
                rate: [],
              },
            },
          },
          { name: 'Item', params: { item: updatedItem } },
        ],
      });
    } else {
      // If editing existing item, just navigate back
      navigation.navigate('Item', { item: updatedItem });
    }
  };

  const handleValueChange = (key: keyof FormValues, value: string | number) => {
    if (emptyField === key) {
      setEmptyField('');
    }
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
            style={{ width: 30, height: 30, marginRight: 10 }}
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
        value={item?.code || ''}
        label="code"
        editable={false}
        maxLength={MAX_LENGTH.code}
      />
      <AutocompleteLabeledTextInput
        value={values.type}
        label="type"
        onChange={(value: string) => handleValueChange('type', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.type)))}
        maxLength={MAX_LENGTH.type}
      />
      <AutocompleteLabeledTextInput
        value={values.brand}
        label="brand"
        onChange={(value: string) => handleValueChange('brand', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.brand)))}
        maxLength={MAX_LENGTH.brand}
      />
      <AutocompleteLabeledTextInput
        value={values.name}
        label="name"
        onChange={(value: string) => handleValueChange('name', value)}
        maxLength={MAX_LENGTH.name}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.name)))}
      />
      <LabeledButtonGroup
        label="rate"
        selectedIndexes={values.rate}
        onChange={(value: number) => handleValueChange('rate', value)}
      />
      {emptyField && <Text style={styles.errorText}>{`${emptyField} can't be empty`}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    alignSelf: 'center',
    color: 'red',
    padding: 15,
  },
});

export default EditItemScreen;
