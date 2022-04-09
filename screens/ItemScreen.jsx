import { Image, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import DataContext from "../context/data-context";
import CardThemed from "../components/CardThemed";
import TextThemed from "../components/TextThemed";
import { useColorScheme } from "react-native";

function ItemScreen({ route, navigation }) {
  const { code } = route.params;
  const scheme = useColorScheme()

  const ctx = useContext(DataContext);
  console.log("tutaj 2 ");
  const { type, brand, name, rate } = ctx.items.find(
    (item) => item.code == code
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { code })}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={ scheme=== 'dark'? require("../assets/pencilLight.png") : require("../assets/pencilDark.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <CardThemed>
      <TextThemed>{"code: " + code}</TextThemed>
      <TextThemed>{"type: " + type}</TextThemed>
      <TextThemed>{"brand: " + brand}</TextThemed>
      <TextThemed>{"name: " + name}</TextThemed>
      <TextThemed>{"rate: " + rate}</TextThemed>
    </CardThemed>
  );
}
export default ItemScreen;
