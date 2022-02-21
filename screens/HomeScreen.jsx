import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native";

function HomeScreen({ navigation }) {
  console.log(navigation.getState());
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Scanner", {})}
        title="Skanuj"
      ></Button>
      <Button
        onPress={() =>
          navigation.navigate("Filter", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
        }
        title="Wyszukaj"
      ></Button>
      <Button
        onPress={() =>
          navigation.navigate("List", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
        }
        title="Produkty"
      ></Button>
    </View>
  );
}
export default HomeScreen;
