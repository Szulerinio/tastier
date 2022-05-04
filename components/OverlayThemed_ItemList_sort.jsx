import OverlayThemed from "./OverlayThemed";
import ButtonPrimary from "../components/ButtonPrimary";
import { View, StyleSheet } from "react-native";
import TextThemed from "./TextThemed";
function OverlayThemed_ItemList_sort({
  isVisible,
  toggleOverlay,
  sortBy,
  setSortBy,
  isSortAscending,
  setIsSortAscending,
}) {
  return (
    isVisible && (
      <OverlayThemed
        onBackdropPress={toggleOverlay}
        overlayStyle={{ flexDirection: "row" }}
      >
        <View>
          <TextThemed style={{ textAlign: "center" }}>Sort by : </TextThemed>
          {["type", "brand", "name", "rate"].map((value, index) => {
            return (
              <View
                key={index}
                style={{
                  opacity: sortBy === value ? 1 : 0.2,
                }}
                /*View wrapper is needed because touchableOpacity doesn't
               work with dynamic changes of opacity */
              >
                <ButtonPrimary
                  buttonStyle={{
                    ...styles.button,
                  }}
                  title={value}
                  buttonProps={{
                    onPress: () => {
                      setSortBy(value);
                    },
                  }}
                ></ButtonPrimary>
              </View>
            );
          })}
        </View>
        <View style={{ height: "100%" }}>
          <TextThemed style={{ textAlign: "center" }}>Order: </TextThemed>
          <View
            style={{
              opacity: isSortAscending ? 1 : 0.2,
              flex: 1,
            }}
            /*View wrapper is needed because touchableOpacity doesn't
               work with dynamic changes of opacity */
          >
            <ButtonPrimary
              buttonStyle={{ ...styles.button, flex: 1 }}
              title="ASC"
              buttonProps={{
                onPress: () => {
                  setIsSortAscending(true);
                },
              }}
            ></ButtonPrimary>
          </View>

          <View
            style={{
              opacity: !isSortAscending ? 1 : 0.2,
              flex: 1,
            }}
            /*View wrapper is needed because touchableOpacity doesn't
             work with dynamic changes of opacity */
          >
            <ButtonPrimary
              buttonStyle={{ ...styles.button, flex: 1 }}
              title="DESC"
              buttonProps={{
                onPress: () => {
                  setIsSortAscending(false);
                },
              }}
            ></ButtonPrimary>
          </View>
        </View>
      </OverlayThemed>
    )
  );
}

const styles = StyleSheet.create({
  button: { margin: 10, minWidth: "20%" },
});

export default OverlayThemed_ItemList_sort;
