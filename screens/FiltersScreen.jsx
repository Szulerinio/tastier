import { useState } from "react";
import { View, StyleSheet } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import LabeledButtonGroup from "../components/LabeledButtonGroup";
import ButtonPrimary from "../components/ButtonPrimary";

function FiltersScreen({ route, navigation }) {
  const { type, brand, name, rate } = route.params;
  const [values, setValues] = useState({ type, brand, name, rate });
  const handleValueChange = (key, value) => {
    setValues((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  return (
    <View>
      <LabeledTextInput
        key={0}
        label="Type"
        value={values.type}
        onChange={(value) => {
          handleValueChange("type", value);
        }}
      ></LabeledTextInput>
      <LabeledTextInput
        key={1}
        label="Brand"
        value={values.brand}
        onChange={(value) => {
          handleValueChange("brand", value);
        }}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        label="Name"
        value={values.name}
        onChange={(value) => {
          handleValueChange("name", value);
        }}
      ></LabeledTextInput>
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
    </View>
  );
}
const styles = StyleSheet.create({
  button: { marginTop: 120 },
});

export default FiltersScreen;
