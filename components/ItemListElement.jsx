import { Text, View, Pressable } from "react-native";
import { Card } from "react-native-elements";

const ItemListElement = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Home");
      }}
    >
      <Card>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          <Text>
            {type}
            {"\n"}
          </Text>
          <Text>
            {brand} {"\n"}
          </Text>
          <Text>
            {name} {"\n"}
          </Text>
          <Text>
            {rate} {"\n"}
          </Text>
          <Text>
            {code} {"\n"}
          </Text>
        </Text>
      </Card>
    </Pressable>
  );
};

export default ItemListElement;
