import { useState } from "react";
import { TextInput, View, TouchableOpacity, Image } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import React from "react";

const EditItemScreen = ({ route, navigation }) => {
  const { code, type, brand, name, rate } = route.params; // TODO add functioning save button

  const [enteredCode, setEnteredCode] = useState(code);
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [enteredRate, setEnteredRate] = useState(rate.toString());
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", {
              enteredCode,
              type,
              brand,
              name,
              rate,
            })
          }
        >
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={require("../assets/icons8-save-30.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View>
      <LabeledTextInput
        key={0}
        value={enteredCode}
        label="code"
        onChange={handleCodeChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={1}
        value={enteredType}
        label="type"
        onChange={handleTypeChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        value={enteredBrand}
        label="brand"
        onChange={handleBrandChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={3}
        value={enteredName}
        label="name"
        onChange={handleNameChange}
      ></LabeledTextInput>
      <LabeledTextInput
        key={4}
        value={enteredRate.toString()}
        label="rate"
        onChange={handleRateChange}
      ></LabeledTextInput>
    </View>
  );
};
export default EditItemScreen;
