import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FiltersScreenProps } from '../types/navigation';
import DataContext from '../context/data-context';
import ButtonPrimary from '../components/ButtonPrimary';
import AutocompleteLabeledTextInput from '../components/AutocompleteLabeledTextInput';
import LabeledButtonGroup from '../components/LabeledButtonGroup';
import { ItemListFilters, Item } from '../types/models';
import { DataContextType } from '../types/context';

interface FilterValues extends ItemListFilters {
  type: string;
  brand: string;
  name: string;
  rate: number[];
}

const MAX_INPUT_LENGTH = 50;

const FiltersScreen: React.FC<FiltersScreenProps> = ({ route, navigation }) => {
  const defaultParams: ItemListFilters = {
    type: '',
    brand: '',
    name: '',
    rate: [],
  };

  const currentParams = route.params?.params || defaultParams;
  const [values, setValues] = useState<FilterValues>(currentParams);
  const ctx = useContext(DataContext) as DataContextType;

  const handleValueChange = (key: keyof FilterValues, value: string | number[]) => {
    setValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <AutocompleteLabeledTextInput
        key={0}
        label="Type"
        value={values.type}
        maxLength={MAX_INPUT_LENGTH}
        onChange={(value: string) => handleValueChange('type', value)}
        autocompleteData={Array.from(new Set(ctx.items.map((item: Item) => item.type)))}
      />
      <AutocompleteLabeledTextInput
        key={1}
        label="Brand"
        value={values.brand}
        maxLength={MAX_INPUT_LENGTH}
        onChange={(value: string) => handleValueChange('brand', value)}
        autocompleteData={Array.from(new Set(ctx.items.map((item: Item) => item.brand)))}
      />
      <AutocompleteLabeledTextInput
        key={2}
        label="Name"
        value={values.name}
        maxLength={MAX_INPUT_LENGTH}
        onChange={(value: string) => handleValueChange('name', value)}
        autocompleteData={Array.from(new Set(ctx.items.map((item: Item) => item.name)))}
      />
      <LabeledButtonGroup
        label="Rate"
        selectMultiple
        selectedIndexes={values.rate}
        onChange={(value: number[]) => handleValueChange('rate', value)}
      />
      <ButtonPrimary
        title="Filter"
        buttonProps={{
          onPress: () => navigation.navigate('ItemList', { params: values }),
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default FiltersScreen;
