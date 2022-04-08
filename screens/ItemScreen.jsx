import { Image, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import React, { useContext } from "react";
import DataContext from "../context/data-context";
import CardPrimary from "../components/CardPrimary";
import TextPrimary from "../components/TextPrimary";

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
    <CardPrimary>
      <TextPrimary>{"code: " + code}</TextPrimary>
      <TextPrimary>{"type: " + type}</TextPrimary>
      <TextPrimary>{"brand: " + brand}</TextPrimary>
      <TextPrimary>{"name: " + name}</TextPrimary>
      <TextPrimary>{"rate: " + rate}</TextPrimary>
    </CardPrimary>
  );
}
export default ItemScreen;
