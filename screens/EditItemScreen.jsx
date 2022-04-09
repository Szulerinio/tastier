import { useState, useContext } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import LabeledTextInput from "../components/LabeledTextInput";
import React from "react";
import DataContext from "../context/data-context";
import LabeledButtonGroup from "../components/LabeledButtonGroup";

import { useColorScheme } from "react-native";

const EditItemScreen = ({ route, navigation }) => {
  const scheme = useColorScheme()
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
  const [empty, setEmpty] = useState("");

  const handleSave = async () => {
    //check if empty fields are empty
    if (enteredType == "") {
      setEmpty("type");
      return;
    }
    if (enteredBrand == "") {
      setEmpty("brand");
      return;
    }
    if (enteredName == "") {
      setEmpty("name");
      return;
    }

    await ctx.editData({
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
    if (empty == "type") setEmpty("");
    setEnteredType(event);
  };
  const handleBrandChange = (event) => {
    if (empty == "brand") setEmpty("");
    setEnteredBrand(event);
  };
  const handleNameChange = (event) => {
    if (empty == "name") setEmpty("");
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
            source={ scheme=== 'dark'? require("../assets/saveLight.png") : require("../assets/saveDark.png")}
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
        maxLength={20}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        value={enteredBrand}
        label="brand"
        onChange={handleBrandChange}
        maxLength={20}
      ></LabeledTextInput>
      <LabeledTextInput
        key={3}
        value={enteredName}
        label="name"
        onChange={handleNameChange}
        maxLength={40}
      ></LabeledTextInput>
      <LabeledButtonGroup
        label="rate"
        selectedIndexes={enteredRate}
        onChange={(value) => {
          handleRateChange(value);
        }}
      ></LabeledButtonGroup>
      {empty != "" && (
        <Text style={style.emptyText}>{empty + " can't be empty"}</Text>
      )}
    </View>
  );
};
export default EditItemScreen;

const style = StyleSheet.create({
  emptyText: {
    color: "red",
    padding: 15,
    alignSelf: "center",
  },
});
