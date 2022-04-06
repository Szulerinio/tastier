import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';

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
      <Button
        color={colors.primary}
        onPress={() => navigation.navigate("Scanner", {})}
        title="Zeskanuj kod kreskowy"
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
        title="Wyszukaj produkt"
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
        title="Twoje produkty"
      ></Button>
    </View>
  );
}
export default HomeScreen;
