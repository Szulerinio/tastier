import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';
import ButtonPrimary from "../components/ButtonPrimary";
import { color } from "react-native-elements/dist/helpers";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useColorScheme } from "react-native";


function HomeScreen({ navigation }) {
  React.useLayoutEffect(()=>{ 
    navigation.setOptions({
      headerShown:false,

    })
  })

  const scheme = useColorScheme()
  return (
    <SafeAreaView style={{ flex: 1}}
>
  
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonPrimary
        buttonProps={{
          onPress:() => navigation.navigate("Scanner", {})
        }}
        buttonStyle = {styles.button}
        
        title="Zeskanuj kod kreskowy"
        ><Image
        style={{ margin: 10 }}
        source={ scheme=== 'dark'? require("../assets/codeLight.png") : require("../assets/codeDark.png")}
      /></ButtonPrimary>
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
      buttonStyle = {styles.button}
      
      title="Wyszukaj produkt"
      ><Image
      style={{ margin: 10 }}
      source={ scheme=== 'dark'? require("../assets/searchLight.png") : require("../assets/searchDark.png")}
    /></ButtonPrimary>
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
      buttonStyle = {styles.button}
      title="Twoje produkty"
      >
      <Image
        style={{ margin: 10 }}
        source={ scheme=== 'dark'? require("../assets/itemsLight.png") : require("../assets/itemsDark.png")}
      /></ButtonPrimary>
    </View>
</SafeAreaView>
  );
}
export default HomeScreen;


const styles = StyleSheet.create({
  button:{
    flex:1,
    marginVertical: '10%'
  },
  container:{ flex: 1, justifyContent: "center", margin:'10%'}
})