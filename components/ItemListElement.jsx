import { Text, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import CardThemed from "./CardThemed";
import TextThemed from "./TextThemed";

const ItemListElement = ({ data, navigation }) => {
  const { code, type, brand, name, rate } = data;
  // console.log("Code: " + code);
  
  const { colors } = useTheme();

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
          <TextThemed>
            Ocena: {rate} {"\n"}
          </TextThemed>
          <TextThemed>
            {/* {code} */}
            {"\n"}
          </TextThemed>
        </Text>
      </CardThemed>
    </Pressable>
  );
};

export default ItemListElement;
