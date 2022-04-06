import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';
import ButtonPrimary from "../components/ButtonPrimary";

function HomeScreen({ navigation }) {
  React.useLayoutEffect(()=>{ 
    navigation.setOptions({
      headerShown:false,

    })
  })
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <ButtonPrimary
        color={colors.primary}
        onPress={() => navigation.navigate("Scanner", {})}
        title="Zeskanuj kod kreskowy"
      ></ButtonPrimary>
      <ButtonPrimary
        onPress={() =>
          navigation.navigate("Filter", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
        }
        title="Wyszukaj produkt"
      ></ButtonPrimary>
      <ButtonPrimary
        onPress={() =>
          navigation.navigate("List", {
            type: "",
            brand: "",
            name: "",
            rate: [],
          })
        }
        title="Twoje produkty"
      ></ButtonPrimary>
    </View>
  );
}
export default HomeScreen;
