import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import ItemListElement from "../components/ItemListElement";
import React, { useContext, useState } from "react";
import DataContext from "../context/data-context";
import ButtonPrimary from "../components/ButtonPrimary";
import TextThemed from "../components/TextThemed";
import OverlayThemed from "../components/OverlayThemed";

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const getNormalized = (text) => {
  return noAccent(text.trim().toLowerCase());
};

const ItemListScreen = ({ route, navigation }) => {
  const { params } = route;
  const [isSortAscending, setIsSortDescending] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const ctx = useContext(DataContext);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const renderItem = ({ item }) => {
    return (
      <ItemListElement
        key={item.code}
        navigation={navigation}
        data={item}
      ></ItemListElement>
    );
  };

  const sortItems = (items, type, direction) => {
    if (type == "") {
      return items;
    }
    const orderAscending = type === "rate" ? true : false;

    if (orderAscending)
      return items.sort((a, b) => {
        return a[type] > b[type] ? -1 : 1;
      });

    return items.sort((a, b) => {
      return a[type] < b[type] ? -1 : 1;
    });
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
      headerTitle: () => (
        <ButtonPrimary
          buttonProps={{
            onPress: toggleOverlay,
          }}
          title={"Sort"}
        ></ButtonPrimary>
      ),
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
        data={sortItems(filter(ctx.items, params), sortBy, isSortAscending)} //Temporarly direction is not used
        // data={filter(ctx.items, params)}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={
          <TextThemed>"No items match the selected filters"</TextThemed>
        }
      />

      <TextThemed>
        {"Filters :" +
          noAccent(params.type) +
          ", " +
          noAccent(params.brand) +
          ", " +
          noAccent(params.name) +
          ", " +
          params.rate}
      </TextThemed>

      <OverlayThemed isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <ButtonPrimary
          title="Sort by name"
          buttonProps={{
            onPress: () => {
              setSortBy("name");
              toggleOverlay();
            },
          }}
        ></ButtonPrimary>
        <ButtonPrimary
          title="Sort by type"
          buttonProps={{
            onPress: () => {
              setSortBy("type");
              toggleOverlay();
            },
          }}
        ></ButtonPrimary>
        <ButtonPrimary
          title="Sort by brand"
          buttonProps={{
            onPress: () => {
              setSortBy("brand");
              toggleOverlay();
            },
          }}
        ></ButtonPrimary>
        <ButtonPrimary
          title="Sort by rate"
          buttonProps={{
            onPress: () => {
              setSortBy("rate");
              toggleOverlay();
            },
          }}
        ></ButtonPrimary>
      </OverlayThemed>
    </View>
  );
};
export default ItemListScreen;
