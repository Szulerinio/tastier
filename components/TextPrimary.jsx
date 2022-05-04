import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
function TextPrimary({ style, ...rest }) {
  const { colors } = useTheme();
  return (
    <Text {...rest} style={{ ...style, color: colors.primaryText }}></Text>
  );
}
export default TextPrimary;
