import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import ItemListElement from "../components/ItemListElement";
import React, { useContext } from "react";
import DataContext from "../context/data-context";
import ButtonPrimary from "../components/ButtonPrimary";
import TextThemed from "../components/TextThemed";

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const getNormalized = (text) => {
  return noAccent(text.trim().toLowerCase());
};
const ItemListScreen = ({ route, navigation }) => {
  const { params } = route;

  const ctx = useContext(DataContext);

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
    const filtered = data.filter((item) => {
      return (
        ["type", "brand", "name"].every((key) =>
          getNormalized(item[key]).includes(getNormalized(filters[key]))
        ) &&
        (filters.rate.length === 0 || filters.rate.includes(item.rate))
      );
    });
    return filtered;
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonPrimary
          buttonProps={{
            onPress: () => navigation.navigate("Filter", { ...params }),
          }}
          title={"Filter"}
        ></ButtonPrimary>
      ),
    });
  }, [route.params, navigation]);

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
        style={{ width: "100%" }}
        data={filter(ctx.items, params)}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={
          <TextThemed>
            "Brak produktów paujących do obecnych filtrów"
          </TextThemed>
        }
      />

      <TextThemed>
        {"Filtry :" +
          noAccent(params.type) +
          ", " +
          noAccent(params.brand) +
          ", " +
          noAccent(params.name) +
          ", " +
          params.rate}
      </TextThemed>
    </View>
  );
};
export default ItemListScreen;
