import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';
import ButtonPrimary from "../components/ButtonPrimary";
import { color } from "react-native-elements/dist/helpers";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  React.useLayoutEffect(()=>{ 
    navigation.setOptions({
      headerShown:false,

    })
  })
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
      buttonStyle = {styles.button}
      
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
      buttonStyle = {styles.button}
      title="Twoje produkty"
      ></ButtonPrimary>
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