import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const scheme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ButtonPrimary
          buttonProps={{
            onPress: () => navigation.navigate("Scanner", {}),
          }}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title="Scan the barcode"
        >
          <Image
            style={styles.buttonImage}
            source={
              scheme === "dark"
                ? require("../assets/codeLight.png")
                : require("../assets/codeDark.png")
            }
          />
        </ButtonPrimary>
        <ButtonPrimary
          buttonProps={{
            onPress: () =>
              navigation.navigate("Filter", {
                type: "",
                brand: "",
                name: "",
                rate: [],
              }),
          }}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title="Search your products"
        >
          <Image
            style={styles.buttonImage}
            source={
              scheme === "dark"
                ? require("../assets/searchLight.png")
                : require("../assets/searchDark.png")
            }
          />
        </ButtonPrimary>
        <ButtonPrimary
          buttonProps={{
            onPress: () =>
              navigation.navigate("List", {
                type: "",
                brand: "",
                name: "",
                rate: [],
              }),
          }}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          title="Your items"
        >
          <Image
            style={styles.buttonImage}
            source={
              scheme === "dark"
                ? require("../assets/itemsLight.png")
                : require("../assets/itemsDark.png")
            }
          />
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginVertical: "10%",
  },
  buttonText: {
    fontSize: 18,
  },
  container: { flex: 1, justifyContent: "center", margin: "10%" },
  buttonImage: {
    margin: 10,
  },
});
