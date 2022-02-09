import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";

function FiltersScreen({ route, navigation }) {
  const { type, brand, name, rate } = route.params;
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [enteredRate, setEnteredRate] = useState(rate);

  const handleTypeFilterChange = (event) => {
    setEnteredType(event);
  };
  const handleBrandFilterChange = (event) => {
    setEnteredBrand(event);
  };
  const handleNameFilterChange = (event) => {
    setEnteredName(event);
  };
  const handleRateFilterChange = (event) => {
    setEnteredRate(event);
  };
  return (
    <View>
      <LabeledTextInput
        key={0}
        label="Type"
        onChange={handleTypeFilterChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={1}
        label="Brand"
        onChange={handleBrandFilterChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        label="Name"
        onChange={handleNameFilterChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={3}
        label="Rate"
        onChange={handleRateFilterChange}
      ></LabeledTextInput>
      <Button
        title="filter"
        style={styles.button}
        onPress={() => {
          navigation.navigate("List", {
            type: enteredType,
            brand: enteredBrand,
            name: enteredName,
            rate: enteredRate,
          });
        }}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  button: { marginTop: 120 },
});

export default FiltersScreen;
