import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, useColorScheme } from "react-native";
import HomeScreen from "./screens//HomeScreen";
import ItemListScreen from "./screens/ItemListScreen";
import FiltersScreen from "./screens/FiltersScreen";
import ItemScreen from "./screens/ItemScreen";
import EditItemScreen from "./screens/EditItemScreen";
import DataProvider from "./context/DataProvider";
import ScanerScreen from "./screens/ScannerScreen";

import { DefaultTheme } from '@react-navigation/native';



const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(20, 33, 33)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)'
  },
};
const MyLightTheme = {
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text:  "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
};
const Stack = createNativeStackNavigator();
export default function App() {

    const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? MyTheme : MyLightTheme}>
      <DataProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="List" component={ItemListScreen}></Stack.Screen>
          <Stack.Screen name="Filter" component={FiltersScreen}></Stack.Screen>
          <Stack.Screen name="Item" component={ItemScreen}></Stack.Screen>
          <Stack.Screen name="Edit" component={EditItemScreen}></Stack.Screen>
          <Stack.Screen name="Scanner" component={ScanerScreen}></Stack.Screen>
        </Stack.Navigator>
      </DataProvider>
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
