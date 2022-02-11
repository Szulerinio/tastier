import { Image, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements/dist/card/Card";
import React from "react";

function ItemScreen({ route, navigation }) {
  const { code, type, brand, name, rate } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", { code, type, brand, name, rate })
          }
        >
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={require("../assets/icons8-edit-24.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <Card>
      <Text>{"code: " + code}</Text>
      <Text>{"type: " + type}</Text>
      <Text>{"brand: " + brand}</Text>
      <Text>{"name: " + name}</Text>
      <Text>{"rate: " + rate}</Text>
    </Card>
  );
}
export default ItemScreen;
