import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import LabeledTextInput from './LabeledTextInput';
import { CustomTheme } from '../App';

// use in <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">

interface AutocompleteLabeledTextInputProps {
  label: string;
  onChange: (value: string) => void;
  value: string;
  maxLength: number;
  autocompleteData: string[];
}

const AutocompleteLabeledTextInput: React.FC<AutocompleteLabeledTextInputProps> = ({
  label,
  onChange,
  value,
  maxLength,
  autocompleteData,
}) => {
  const [autocompleteVisible, setAutocompleteVisible] = useState(false);
  const { colors } = useTheme() as CustomTheme;

  const onFocus = () => {
    // Focus handler if needed
  };

  const handleChange = (value: string) => {
    setAutocompleteVisible(true);
    onChange(value);
  };

  const onBlur = () => {
    setAutocompleteVisible(false);
  };

  const noAccent = (text: string): string => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const getNormalized = (text: string): string => {
    return noAccent(text.trim().toLowerCase());
  };

  const filteredData = (): string[] => {
    return autocompleteData
      .filter(val => {
        return val !== undefined && getNormalized(val).includes(getNormalized(value));
      })
      .slice(0, 3);
  };

  const renderItem = (item: string, index: number) => {
    return (
      <TouchableOpacity
        key={`key-${index}`}
        style={[styles.suggestion, { borderColor: colors.border }]}
        onPress={() => {
          setAutocompleteVisible(false);
          onChange(item);
        }}
      >
        <Text style={{ color: colors.primary }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderSuggestions = (data: string[]) => {
    return data.map((item, index) => renderItem(item, index));
  };

  return (
    <View style={styles.container}>
      <View>
        <LabeledTextInput
          label={label}
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
      <View>{autocompleteVisible && renderSuggestions(filteredData())}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  suggestion: {
    borderWidth: 1,
    marginHorizontal: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 2,
  },
});

export default AutocompleteLabeledTextInput;
