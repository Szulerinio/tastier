import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native";

const TEMPITEMS = [
  { type: "Piwo", brand: "Beczkowe", name: "mocne wiśnia 9%", rate: 5 },
  { type: "Piwo", brand: "Beczkowe2", name: "mocne wiśnia 9%", rate: 5 },
  { type: "Piwo", brand: "Beczkowe3", name: "mocne wiśnia 9%", rate: 5 },
  { type: "Piwo", brand: "Beczkowe4", name: "mocne wiśnia 9%", rate: 5 },
  { type: "Piwo", brand: "Beczkowe5", name: "mocne wiśnia 9%", rate: 5 },
];

function ItemListScreen({ route, navigation }) {
  const { nazwa } = route.params;
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
        {TEMPITEMS.map((item, index) => {
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

      <Text>Filtry : {JSON.stringify(route.params)}</Text>
    </View>
  );
}
export default ItemListScreen;
