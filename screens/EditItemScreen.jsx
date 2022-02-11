import { useState } from "react";
import { TextInput, View } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";

const EditItemScreen = ({ route, navigation }) => {
  const { code, type, brand, name, rate } = route.params; // TODO add functioning save button
  const [enteredCode, setEnteredCode] = useState();
  const [enteredType, setEnteredType] = useState();
  const [enteredBrand, setEnteredBrand] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredRate, setEnteredRate] = useState();
  const handleCodeChange = (event) => {
    setEnteredCode(event);
  };
  const handleTypeChange = (event) => {
    setEnteredType(event);
  };
  const handleBrandChange = (event) => {
    setEnteredBrand(event);
  };
  const handleNameChange = (event) => {
    setEnteredName(event);
  };
  const handleRateChange = (event) => {
    setEnteredRate(event);
  };
  return (
    <View>
      <LabeledTextInput
        key={0}
        value={code}
        label="code"
        onChange={handleCodeChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={1}
        value={type}
        label="type"
        onChange={handleTypeChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        value={brand}
        label="brand"
        onChange={handleBrandChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={3}
        value={name}
        label="name"
        onChange={handleNameChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={4}
        value={rate.toString()}
        label="rate"
        onChange={handleRateChange}
      ></LabeledTextInput>
    </View>
  );
};
export default EditItemScreen;
