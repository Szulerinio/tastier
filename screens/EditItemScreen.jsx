import { useState, useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import React from "react";
import DataContext from "../context/data-context";
import LabeledButtonGroup from "../components/LabeledButtonGroup";

const EditItemScreen = ({ route, navigation }) => {
  console.log("EDIT SCREEN");
  const { code } = route.params;
  const ctx = useContext(DataContext);
  console.log("tutaj 3 ");
  console.log(code);
  const temp = ctx.items.find((item) => item.code == code);
  const { type = "", brand = "", name = "", rate = 0 } = temp || "";
  const [enteredType, setEnteredType] = useState(type);
  const [enteredBrand, setEnteredBrand] = useState(brand);
  const [enteredName, setEnteredName] = useState(name);
  const [enteredRate, setEnteredRate] = useState(rate);

  const handleSave = () => {
    ctx.editData({
      code: code,
      type: enteredType,
      brand: enteredBrand,
      name: enteredName,
      rate: enteredRate,
    });
    if (temp == undefined) {
      const routes = [
        { name: "Home", params: undefined },
        {
          name: "List",
          params: {
            brand: "",
            name: "",
            rate: [],
            type: "",
          },
        },
        { name: "Item", params: { code: code } },
      ];
      navigation.reset({
        index: 1,
        routes: routes,
      });
    } else {
      navigation.navigate("Item", {
        code: code,
      });
    }
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
        <TouchableOpacity onPress={handleSave}>
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
      <LabeledButtonGroup
        label="rate"
        selectedIndexes={enteredRate}
        onChange={(value) => {
          handleRateChange(value);
        }}
      ></LabeledButtonGroup>
    </View>
  );
};
export default EditItemScreen;
