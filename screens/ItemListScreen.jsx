import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native";

const TEMPITEMS = [
  { type: "Piwo", brand: "Beczkowe", name: "mocne wiśnia 9%", rate: 5 },
  { type: "Piwó", brand: "Namysłów", name: "kuflowe mocne", rate: 4 },
  { type: "Czekolada", brand: "Shogetten", name: "Black and white", rate: 5 },
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

function ItemListScreen({ route, navigation }) {
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
        {filter(params).map((item, index) => {
          return (
            <View key={index}>
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                <Text>
                  {item.type}
                  {"\n"}
                </Text>
                <Text>
                  {item.brand} {"\n"}
                </Text>
                <Text>
                  {item.name} {"\n"}
                </Text>
                <Text>
                  {item.rate} {"\n"}
                </Text>
              </Text>
            </View>
          );
        })}
      </View>

      {/* <Text>Filtry : {noAccent(params.type) + "."}</Text> */}
    </View>
  );
}
export default ItemListScreen;
