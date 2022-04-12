import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";
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
    if (values.type == "") {
      setEmpty("type");
      return;
    }
    if (values.brand == "") {
      setEmpty("brand");
      return;
    }
    if (values.name == "") {
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
    <View>
      <LabeledTextInput
        key={1}
        value={values.type}
        label="type"
        onChange={(value) => {
          handleValueChange("type", value);
        }}
        maxLength={20}
      ></LabeledTextInput>
      <LabeledTextInput
        key={2}
        value={values.brand}
        label="brand"
        onChange={(value) => {
          handleValueChange("brand", value);
        }}
        maxLength={20}
      ></LabeledTextInput>
      <LabeledTextInput
        key={3}
        value={values.name}
        label="name"
        onChange={(value) => {
          handleValueChange("name", value);
        }}
        maxLength={40}
      ></LabeledTextInput>
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
    </View>
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
