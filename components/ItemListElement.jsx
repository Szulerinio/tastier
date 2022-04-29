import { Text, Pressable } from "react-native";
import CardThemed from "./CardThemed";
import TextThemed from "./TextThemed";
import { View } from "react-native";
const ItemListElement = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        navigation.navigate("Item", { code });
      }}
    >
      <CardThemed containerStyle={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          <TextThemed>
            {type}
            {"\n"}
          </TextThemed>
          <TextThemed>
            {brand} {"\n"}
          </TextThemed>
          <TextThemed>
            {name} {"\n"}
          </TextThemed>
          <TextThemed>Rate: {rate}</TextThemed>
        </Text>
      </CardThemed>
    </Pressable>
  );
};

export default ItemListElement;
