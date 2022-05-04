import { useTheme } from "@react-navigation/native";
import { Overlay } from "react-native-elements";
function OverlayThemed({ children, overlayStyle, ...rest }) {
  const { colors } = useTheme();
  return (
    <Overlay
      {...rest}
      overlayStyle={{
        padding: 20,
        backgroundColor: colors.background,
        ...overlayStyle,
      }}
    >
      {children}
    </Overlay>
  );
}
export default OverlayThemed;
