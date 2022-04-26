import { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import LabeledButtonGroup from "../components/LabeledButtonGroup";
import ButtonPrimary from "../components/ButtonPrimary";
import AutocompleteLabeledTextInput from "../components/AutocompleteLabeledTextInput";
import dataContext from "../context/data-context";

function FiltersScreen({ route, navigation }) {
  const { type, brand, name, rate } = route.params;
  const [values, setValues] = useState({ type, brand, name, rate });
  const ctx = useContext(dataContext);
  const handleValueChange = (key, value) => {
    setValues((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="hadled">
      <AutocompleteLabeledTextInput
        key={0}
        label="Type"
        value={values.type}
        onChange={(value) => {
          handleValueChange("type", value);
        }}
        autocompleteData={ctx.items.map((item) => item.type)}
      ></AutocompleteLabeledTextInput>
      <AutocompleteLabeledTextInput
        key={1}
        label="Brand"
        value={values.brand}
        onChange={(value) => {
          handleValueChange("brand", value);
        }}
        autocompleteData={ctx.items.map((item) => item.brand)}
      ></AutocompleteLabeledTextInput>
      <AutocompleteLabeledTextInput
        key={2}
        label="Name"
        value={values.name}
        onChange={(value) => {
          handleValueChange("name", value);
        }}
        autocompleteData={ctx.items.map((item) => item.name)}
      ></AutocompleteLabeledTextInput>
      <LabeledButtonGroup
        label="rate"
        selectMultiple
        selectedIndexes={values.rate}
        onChange={(value) => {
          handleValueChange("rate", value);
        }}
      ></LabeledButtonGroup>
      <ButtonPrimary
        title="filter"
        buttonProps={{
          onPress: () => {
            navigation.navigate("List", { ...values });
          },
        }}
        buttonStyle={styles.button}
      ></ButtonPrimary>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: { marginTop: 120 },
});

export default FiltersScreen;
