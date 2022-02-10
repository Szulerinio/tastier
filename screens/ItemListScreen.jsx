import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native";
import ItemListElement from "../components/ItemListElement";

const TEMPITEMS = [
  {
    code: "0",
    type: "Piwo",
    brand: "Beczkowe",
    name: "mocne wiśnia 9%",
    rate: 5,
  },
  {
    code: "1",
    type: "Piwó",
    brand: "Namysłów",
    name: "kuflowe mocne",
    rate: 4,
  },
  {
    code: "2",
    type: "Czekolada",
    brand: "Shogetten",
    name: "Black and white",
    rate: 5,
  },
];

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filter(filters) {
  let filtered = TEMPITEMS.filter((item) => {
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
      (filters.rate == "" || item.rate == filters.rate)
    );
  });
  return filtered;
}

const ItemListScreen = ({ route, navigation }) => {
  const { params } = route;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />
      <View>
        {filter(params).map((item) => {
          return (
            <ItemListElement
              key={item.code}
              navigation={navigation}
              data={item}
            ></ItemListElement>
          );
        })}
      </View>

      <Text>
        {"Filtry :" +
          noAccent(params.type) +
          ", " +
          noAccent(params.brand) +
          ", " +
          noAccent(params.name) +
          ", " +
          noAccent(params.rate)}
      </Text>
    </View>
  );
};
export default ItemListScreen;
