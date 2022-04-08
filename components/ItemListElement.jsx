import { Text, Pressable } from "react-native";
import { Card } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import CardPrimary from "./CardPrimary";
import TextPrimary from "./TextPrimary";

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
      <CardPrimary>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          <TextPrimary>
            {type}
            {"\n"}
          </TextPrimary>
          <TextPrimary>
            {brand} {"\n"}
          </TextPrimary>
          <TextPrimary>
            {name} {"\n"}
          </TextPrimary>
          <TextPrimary>
            Ocena: {rate} {"\n"}
          </TextPrimary>
          <TextPrimary>
            {/* {code} */}
            {"\n"}
          </TextPrimary>
        </Text>
      </CardPrimary>
    </Pressable>
  );
};

export default ItemListElement;
