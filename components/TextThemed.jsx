import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
function TextThemed(props) {
  const { colors } = useTheme();
  return <Text {...props} style={{ color: colors.text }}></Text>;
}
export default TextThemed;
