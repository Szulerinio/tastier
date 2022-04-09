import { useState } from "react";
import { View, StyleSheet } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import LabeledButtonGroup from "../components/LabeledButtonGroup";
import ButtonPrimary from "../components/ButtonPrimary";

function FiltersScreen({ route, navigation }) {
  const { type, brand, name, rate } = route.params;
  
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [selectedRates, setSelectedRates] = useState(rate);

  const handleTypeFilterChange = (event) => {
    setEnteredType(event);
  };
  const handleBrandFilterChange = (event) => {
    setEnteredBrand(event);
  };
  const handleNameFilterChange = (event) => {
    setEnteredName(event);
  };
  return (
    <View>
      <LabeledTextInput
        key={0}
        label="Type"
        value={enteredType}
        onChange={handleTypeFilterChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={1}
        label="Brand"
        value={enteredBrand}
        onChange={handleBrandFilterChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        label="Name"
        value={enteredName}
        onChange={handleNameFilterChange}
      ></LabeledTextInput>
      <LabeledButtonGroup
        label="rate"
        selectMultiple
        selectedIndexes={selectedRates}
        onChange={(value) => {
          setSelectedRates(value);
        }}
      ></LabeledButtonGroup>
      <ButtonPrimary
        title="filter"
        buttonProps= {{
          onPress:() => {
            navigation.navigate("List", {
              type: enteredType || "",
              brand: enteredBrand || "",
              name: enteredName || "",
              rate: selectedRates || [],
            })
          }
        }}
        buttonStyle={styles.button}
      ></ButtonPrimary>
    </View>
  );
}
const styles = StyleSheet.create({
  button: { marginTop: 120 },
});

export default FiltersScreen;
