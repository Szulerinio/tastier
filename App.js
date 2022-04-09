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
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";



const MyDarkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(1, 126, 216)',
    primaryText: 'rgb(255,255,255)',
    background: 'rgb(36, 36, 36)',
    card: 'rgb(27, 27, 27)',
    text: 'rgb(255,255,255)',
    border: 'rgb(1, 0, 204)',
    notification: 'rgb(255, 69, 58)'
  },
};
const MyLightTheme = {
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    primaryText: 'rgb(255, 255, 255)',
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
<SafeAreaProvider 
style={{ backgroundColor: scheme=== 'dark' ? MyDarkTheme.colors.background: MyLightTheme.colors.background }} //needed for default screen transition animation
>
   <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme}>
      <DataProvider>
        <Stack.Navigator screenOptions={{animation:'slide_from_left' }} initialRouteName="Home">
          <Stack.Screen name="Home"component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="List" component={ItemListScreen}></Stack.Screen>
          <Stack.Screen name="Filter" component={FiltersScreen}></Stack.Screen>
          <Stack.Screen name="Item" component={ItemScreen}></Stack.Screen>
          <Stack.Screen name="Edit" component={EditItemScreen}></Stack.Screen>
          <Stack.Screen name="Scanner" component={ScanerScreen}></Stack.Screen>
        </Stack.Navigator>
      </DataProvider>
    </NavigationContainer>
   </SafeAreaProvider>
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
