import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import ItemListElement from "../components/ItemListElement";
import React, { useContext, useState } from "react";
import DataContext from "../context/data-context";
import ButtonPrimary from "../components/ButtonPrimary";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import TextThemed from "../components/TextThemed";
import OverlayThemed_ItemList_sort from "../components/OverlayThemed_ItemList_sort";

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const getNormalized = (text) => {
  return noAccent(text.trim().toLowerCase());
};

const ItemListScreen = ({ route, navigation }) => {
  const { params } = route;
  const [isSortAscending, setIsSortAscending] = useState(true);
  const [sortBy, setSortBy] = useState("name");
  const ctx = useContext(DataContext);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const printToPDF = async () => {
    const itemsHTML = sortItems(
      filter(ctx.items, params),
      sortBy,
      isSortAscending
    )
      .map((item) => {
        return `<tr>
      <td>${item.type}</td>
      <td>${item.brand}</td>
      <td>${item.name}</td>
      <td class="rating">${item.rate}</td>
      <td>${item.code}</td>
      </tr>`;
      })
      .reduce((prev, el) => prev + `${el}`, "");

    const html = `<html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid black;
          width: 23%;
        }

        .rating 
        {
          width: 8%;
        }
      </style>
    </head>
    <body style="text-align: center">
      <table>
        <thead>
          <tr>
            <th>type</th>
            <th>brand</th>
            <th>name</th>
            <th class="rating">rating</th>
            <th>code</th>
          </tr>
        </thead>
        <tbody>
         ${itemsHTML}
        </tbody>
      </table>
    </body>
  </html>
  `;

    const { uri } = await Print.printToFileAsync({ html });
    await shareAsync(uri, {
      UTI: ".pdf",
      mimeType: "application/pdf",
    });
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

  const sortItems = (items, type, isSortAscending) => {
    if (type == "") {
      return items;
    }

    if (isSortAscending)
      return items.sort((a, b) => {
        return a[type] < b[type] ? -1 : 1;
      });

    return items.sort((a, b) => {
      return a[type] > b[type] ? -1 : 1;
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
        data={sortItems(filter(ctx.items, params), sortBy, isSortAscending)}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={
          <TextThemed>"No items match the selected filters"</TextThemed>
        }
      />

      <ButtonPrimary
        buttonProps={{
          onPress: printToPDF,
        }}
        title={"Print to PDF"}
      ></ButtonPrimary>
      <OverlayThemed_ItemList_sort
        isVisible={overlayVisible}
        toggleOverlay={toggleOverlay}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isSortAscending={isSortAscending}
        setIsSortAscending={setIsSortAscending}
      />
    </View>
  );
};
export default ItemListScreen;
