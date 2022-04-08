import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';
import ButtonPrimary from "../components/ButtonPrimary";
import { color } from "react-native-elements/dist/helpers";

function HomeScreen({ navigation }) {
  React.useLayoutEffect(()=>{ 
    navigation.setOptions({
      headerShown:false,

    })
  })
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <ButtonPrimary
        buttonProps={{
          onPress:() => navigation.navigate("Scanner", {})
        }}
        title="Zeskanuj kod kreskowy"
      ></ButtonPrimary>
      <ButtonPrimary
      buttonProps={{
        onPress:() =>
          navigation.navigate("Filter", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
      }}
        title="Wyszukaj produkt"
      ></ButtonPrimary>
      <ButtonPrimary
      buttonProps = {{
        onPress:() =>
          navigation.navigate("List", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
      }}
        title="Twoje produkty"
      ></ButtonPrimary>
    </View>
  );
}
export default HomeScreen;
