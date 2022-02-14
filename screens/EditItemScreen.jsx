import { useState, useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import React from "react";
import DataContext from "../context/data-context";

const EditItemScreen = ({ route, navigation }) => {
  const { code } = route.params;
  const ctx = useContext(DataContext);
  console.log("tutaj 3 ");
  console.log(code);
  const temp = ctx.items.find((item) => item.code == code);
  const { type, brand, name, rate } = temp || "";
  const [enteredCode, setEnteredCode] = useState(code);
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [enteredRate, setEnteredRate] = useState(rate);
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
          onPress={() => {
            ctx.editData({
              code: enteredCode,
              type: enteredType,
              brand: enteredBrand,
              name: enteredName,
              rate: enteredRate,
            });
            navigation.navigate("Item", {
              code: enteredCode,
            });
          }}
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
        value={enteredRate}
        label="rate"
        onChange={handleRateChange}
      ></LabeledTextInput>
    </View>
  );
};
export default EditItemScreen;
