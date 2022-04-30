import { useTheme } from "@react-navigation/native";
import { Overlay } from "react-native-elements";
import { View } from "react-native";
import React from "react";
function OverlayThemed({ children, overlayStyle, ...rest }) {
  const { colors } = useTheme();
  return (
    <Overlay
      {...rest}
      overlayStyle={{
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: colors.background,

        ...overlayStyle,
      }}
    >
      {React.Children.toArray(children).map((element, index) => (
        <View key={index} style={{ margin: "3%", minWidth: "50%" }}>
          {element}
        </View>
      ))}
    </Overlay>
  );
}
export default OverlayThemed;
