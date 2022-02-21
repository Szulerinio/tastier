import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native";
import ItemListElement from "../components/ItemListElement";
import React, { useContext } from "react";
import DataContext from "../context/data-context";

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const ItemListScreen = ({ route, navigation }) => {
  console.log("LIST SCREEN");
  const { params } = route;
  const ctx = useContext(DataContext);
  // const isFocused = useIsFocused();
  // useEffect(() => {
  //   // console.log("AAAAAAAAAAAAA");
  // }, [isFocused]);

  console.log("tutaj 1 ");
  const renderItem = ({ item }) => {
    return (
      <ItemListElement
        key={item.code}
        navigation={navigation}
        data={item}
      ></ItemListElement>
    );
  };

  function filter(data, filters) {
    let filtered = data.filter((item) => {
      return (
        noAccent(item.type)
          .toLowerCase()
          .includes(noAccent(filters.type).toLowerCase()) &&
        noAccent(item.brand)
          .toLowerCase()
          .includes(noAccent(filters.brand).toLowerCase()) &&
        noAccent(item.name)
          .toLowerCase()
          .includes(noAccent(filters.name).toLowerCase()) &&
        (filters.rate.includes(item.rate) || filters.rate.length === 0)
      );
    });
    return filtered;
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Filter", { ...params })}
          title={"Filter"}
        ></Button>
      ),
    });
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />

      <FlatList
        data={filter(ctx.items, params)}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={
          <Text>"Brak produktów paujących do obecnych filtrów"</Text>
        }
      />

      <Text>
        {"Filtry :" +
          noAccent(params.type) +
          ", " +
          noAccent(params.brand) +
          ", " +
          noAccent(params.name) +
          ", " +
          params.rate}
      </Text>
      {/* <Button
        onPress={() =>
          ctx.editData({
            code: "72",
            type: "Czekolada",
            brand: "Shogetten",
            name: "Black and white",
            rate: 5,
          })
        }
        title={"addd"}
      ></Button> */}
    </View>
  );
};
export default ItemListScreen;
