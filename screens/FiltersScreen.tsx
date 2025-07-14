import { useContext, useState } from 'react';
import { StyleSheet, ScrollView, ViewStyle } from 'react-native';
import LabeledButtonGroup from '../components/LabeledButtonGroup';
import ButtonPrimary from '../components/ButtonPrimary';
import AutocompleteLabeledTextInput from '../components/AutocompleteLabeledTextInput';
import DataContext from '../context/data-context';
import { FiltersScreenProps } from '../types/navigation';

interface FilterValues {
  type: string;
  brand: string;
  name: string;
  rate: number[];
}

const MAX_INPUT_LENGTH = 50;

const FiltersScreen: React.FC<FiltersScreenProps> = ({ route, navigation }) => {
  const { type, brand, name, rate } = route.params ?? { type: '', brand: '', name: '', rate: [] };
  const [values, setValues] = useState<FilterValues>({ type, brand, name, rate });
  const ctx = useContext(DataContext);

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
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.type)))}
      />
      <AutocompleteLabeledTextInput
        key={1}
        label="Brand"
        value={values.brand}
        maxLength={MAX_INPUT_LENGTH}
        onChange={(value: string) => handleValueChange('brand', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.brand)))}
      />
      <AutocompleteLabeledTextInput
        key={2}
        label="Name"
        value={values.name}
        maxLength={MAX_INPUT_LENGTH}
        onChange={(value: string) => handleValueChange('name', value)}
        autocompleteData={Array.from(new Set(ctx.items.map(item => item.name)))}
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
          onPress: () => navigation.navigate('ItemList'),
        }}
      />
    </ScrollView>
  );
};

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
});

export default FiltersScreen;
