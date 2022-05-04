import { Image, useColorScheme, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import DataContext from "../context/data-context";
import CardThemed from "../components/CardThemed";
import TextThemed from "../components/TextThemed";
import OverlayThemed_ItemScreen from "../components/OverlayThemed_ItemScreen";

function ItemScreen({ route, navigation }) {
  const { code } = route.params;
  const scheme = useColorScheme();
  const ctx = useContext(DataContext);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [confirmOverlayVisible, setConfirmOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const toggleConfirmOverlay = () => {
    setConfirmOverlayVisible(!confirmOverlayVisible);
  };

  const { type, brand, name, rate } = ctx.items.find(
    (item) => item.code == code
  );

  const handleDelete = () => {
    ctx.deleteData({ code, type, brand, name, rate });
    navigation.navigate("List", {
      type: "",
      brand: "",
      name: "",
      rate: [],
    });
  };

  const onPressEdit = () => {
    toggleOverlay();
    navigation.navigate("Edit", { code });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleOverlay}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={
              scheme === "dark"
                ? require("../assets/pencilLight.png")
                : require("../assets/pencilDark.png")
            }
          />
        </TouchableOpacity>
      ),
    });
  }, [route, navigation]);

  return (
    <CardThemed>
      <TextThemed>{"code: " + code}</TextThemed>
      <TextThemed>{"type: " + type}</TextThemed>
      <TextThemed>{"brand: " + brand}</TextThemed>
      <TextThemed>{"name: " + name}</TextThemed>
      <TextThemed>{"rate: " + rate}</TextThemed>
      <OverlayThemed_ItemScreen
        idEditOverlayVisible={overlayVisible}
        onPressEdit={onPressEdit}
        onDeletePress={toggleConfirmOverlay}
        isConfirmOverlayVisible={confirmOverlayVisible}
        onPressReturn={toggleConfirmOverlay}
        onConfrimDelete={handleDelete}
        onBackdropPress={() => {
          setConfirmOverlayVisible(false);
          setOverlayVisible(false);
        }}
      />
    </CardThemed>
  );
}
export default ItemScreen;
