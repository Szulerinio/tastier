import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import { ButtonGroup } from "react-native-elements";

function FiltersScreen({ route, navigation }) {
  console.log("FILTER SCREEN");
  const { type, brand, name, rate } = route.params;
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [enteredRate, setEnteredRate] = useState(rate);
  const [selectedRates, setSelectedRates] = useState([]);

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
      <LabeledTextInput
        key={3}
        label="Rate"
        value={enteredRate}
        onChange={handleRateFilterChange}
      ></LabeledTextInput>
      <ButtonGroup
        buttons={["0", "1", "2", "3", "4", "5"]}
        selectMultiple
        selectedIndexes={selectedRates}
        onPress={(value) => {
          setSelectedRates(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <Button
        title="filter"
        style={styles.button}
        onPress={() => {
          navigation.navigate("List", {
            type: enteredType || "",
            brand: enteredBrand || "",
            name: enteredName || "",
            rate: selectedRates || [],
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
