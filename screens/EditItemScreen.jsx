import React, { useState, useContext } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";
import AutocompleteLabeledTextInput from "../components/AutocompleteLabeledTextInput";
import LabeledTextInput from "../components/LabeledTextInput";
import DataContext from "../context/data-context";
import LabeledButtonGroup from "../components/LabeledButtonGroup";

const EditItemScreen = ({ route, navigation }) => {
  const scheme = useColorScheme();
  const { code } = route.params;
  const ctx = useContext(DataContext);
  const temp = ctx.items.find((item) => item.code == code);
  const { type = "", brand = "", name = "", rate = 0 } = temp || "";

  const [values, setValues] = useState({ type, brand, name, rate });
  const [empty, setEmpty] = useState("");

  const handleSave = async () => {
    //check if fields are empty
    if (values.type.trim() == "") {
      setEmpty("type");
      return;
    }
    if (values.brand.trim() == "") {
      setEmpty("brand");
      return;
    }
    if (values.name.trim() == "") {
      setEmpty("name");
      return;
    }

    await ctx.editData({
      code: code,
      ...values,
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

  const handleValueChange = (key, value) => {
    if (empty == key) setEmpty("");
    setValues((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSave}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={
              scheme === "dark"
                ? require("../assets/saveLight.png")
                : require("../assets/saveDark.png")
            }
          />
        </TouchableOpacity>
      ),
    });
  }, [route, navigation, handleSave]);

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="hadled">
      <LabeledTextInput
        key={0}
        value={code}
        label="code"
        editable={false}
        maxLength={20}
      ></LabeledTextInput>
      <AutocompleteLabeledTextInput
        key={1}
        value={values.type}
        label="type"
        onChange={(value) => {
          handleValueChange("type", value);
        }}
        autocompleteData={ctx.items.map((item) => item.type)}
        maxLength={20}
      ></AutocompleteLabeledTextInput>
      <AutocompleteLabeledTextInput
        key={2}
        value={values.brand}
        label="brand"
        onChange={(value) => {
          handleValueChange("brand", value);
        }}
        autocompleteData={ctx.items.map((item) => item.brand)}
        maxLength={20}
      ></AutocompleteLabeledTextInput>
      <AutocompleteLabeledTextInput
        key={3}
        value={values.name}
        label="name"
        onChange={(value) => {
          handleValueChange("name", value);
        }}
        maxLength={40}
        autocompleteData={ctx.items.map((item) => item.name)}
      ></AutocompleteLabeledTextInput>
      <LabeledButtonGroup
        label="rate"
        selectedIndexes={values.rate}
        onChange={(value) => {
          handleValueChange("rate", value);
        }}
      ></LabeledButtonGroup>
      {empty != "" && (
        <Text style={style.errorEmptyText}>{empty + " can't be empty"}</Text>
      )}
    </ScrollView>
  );
};
export default EditItemScreen;

const style = StyleSheet.create({
  errorEmptyText: {
    color: "red",
    padding: 15,
    alignSelf: "center",
  },
});
