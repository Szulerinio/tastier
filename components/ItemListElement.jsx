import { Text, Pressable } from "react-native";
import { Card } from "react-native-elements";

const ItemListElement = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;
  // console.log("Code: " + code);
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Item", { code });
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
            Ocena: {rate} {"\n"}
          </Text>
          <Text>
            {/* {code} */}
            {"\n"}
          </Text>
        </Text>
      </Card>
    </Pressable>
  );
};

export default ItemListElement;
