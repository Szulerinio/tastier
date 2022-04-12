import { Text, Pressable } from "react-native";
import CardThemed from "./CardThemed";
import TextThemed from "./TextThemed";

const ItemListElement = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Item", { code });
      }}
    >
      <CardThemed>
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
          <TextThemed>Ocena: {rate}</TextThemed>
        </Text>
      </CardThemed>
    </Pressable>
  );
};

export default ItemListElement;
