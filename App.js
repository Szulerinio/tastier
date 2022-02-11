import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens//HomeScreen";
import ItemListScreen from "./screens/ItemListScreen";
import FiltersScreen from "./screens/FiltersScreen";
import ItemScreen from "./screens/ItemScreen";
import EditItemScreen from "./screens/EditItemScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ItemListScreen}></Stack.Screen>
        <Stack.Screen name="Filter" component={FiltersScreen}></Stack.Screen>
        <Stack.Screen name="Item" component={ItemScreen}></Stack.Screen>
        <Stack.Screen name="Edit" component={EditItemScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
