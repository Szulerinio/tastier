import LabeledTextInput from "./LabeledTextInput";
import { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
const AutocompleteLabeledTextInput = ({
  label,
  onChange,
  value,
  maxLength,
  autocompleteData,
}) => {
  const [autocompleteVisible, setAutocompleteVisible] = useState(false);

  const { colors } = useTheme();
  const onFocus = () => {};
  const handleChange = (value) => {
    setAutocompleteVisible(true);

    onChange(value);
  };
  const onBlur = () => {
    setAutocompleteVisible(false);
  };

  function noAccent(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const getNormalized = (text) => {
    return noAccent(text.trim().toLowerCase());
  };

  const filteredData = () => {
    return autocompleteData
      .filter((val) => {
        return getNormalized(val).includes(getNormalized(value));
      })
      .slice(0, 3);
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={`key-${index}`}
        style={{ borderColor: colors.border, ...styles.suggestion }}
        onPress={() => {
          setAutocompleteVisible(false);
          onChange(item);
        }}
      >
        <Text style={{ color: colors.primary }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderSuggestions = (data) => {
    return data.map((item, index) => {
      return renderItem(item, index);
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <LabeledTextInput
          label={label}
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={onBlur}
        ></LabeledTextInput>
      </View>
      <View>{autocompleteVisible && renderSuggestions(filteredData())}</View>
    </View>
  );
};
export default AutocompleteLabeledTextInput;
const styles = StyleSheet.create({
  suggestion: {
    borderWidth: 1,
    marginHorizontal: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 2,
  },
});
