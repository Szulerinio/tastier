import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
function TextThemed({ style, ...rest }) {
  const { colors } = useTheme();
  return <Text {...rest} style={{ ...style, color: colors.text }}></Text>;
}
export default TextThemed;
