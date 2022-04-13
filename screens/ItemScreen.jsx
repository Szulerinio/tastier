import { Image, useColorScheme, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState } from "react";
import DataContext from "../context/data-context";
import CardThemed from "../components/CardThemed";
import TextThemed from "../components/TextThemed";
import OverlayThemed from "../components/OverlayThemed";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonDanger from "../components/ButtonDanger";
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
      <OverlayThemed
        isVisible={confirmOverlayVisible}
        onBackdropPress={() => {
          toggleConfirmOverlay();
          toggleOverlay();
        }}
      >
        <TextThemed>Are you sure? This cannot be undone</TextThemed>
        <ButtonDanger
          title="Delete"
          buttonProps={{
            onPress: handleDelete,
          }}
        ></ButtonDanger>
        <ButtonPrimary
          title="Return"
          buttonProps={{
            onPress: toggleConfirmOverlay,
          }}
        ></ButtonPrimary>
      </OverlayThemed>
      <OverlayThemed isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
        <ButtonPrimary
          title="Edit"
          buttonProps={{
            onPress: () => {
              toggleOverlay();
              navigation.navigate("Edit", { code });
            },
          }}
        ></ButtonPrimary>
        <ButtonDanger
          title="Delete"
          buttonProps={{
            onPress: toggleConfirmOverlay,
          }}
        ></ButtonDanger>
      </OverlayThemed>
    </CardThemed>
  );
}
export default ItemScreen;
