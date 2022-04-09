import { Image, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import DataContext from "../context/data-context";
import CardThemed from "../components/CardThemed";
import TextThemed from "../components/TextThemed";

function ItemScreen({ route, navigation }) {
  const { code } = route.params;

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
            source={require("../assets/icons8-edit-24.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <CardThemed>
      <Text>{"code: " + code}</Text>
      <TextThemed>{"type: " + type}</TextThemed>
      <TextThemed>{"brand: " + brand}</TextThemed>
      <TextThemed>{"name: " + name}</TextThemed>
      <TextThemed>{"rate: " + rate}</TextThemed>
    </CardThemed>
  );
}
export default ItemScreen;
