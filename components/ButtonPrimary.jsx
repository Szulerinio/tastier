import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
function ButtonPrimary(props) {
  const { colors } = useTheme();
  const { buttonStyle, buttonProps, textStyle, title, children } = props;

  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        ...styles.button,
        ...buttonStyle,
        backgroundColor: colors.primary,
      }}
    >
      {children}
      <Text style={{ ...styles.text, ...textStyle, color: colors.primaryText }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default ButtonPrimary;
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 2,
  },
  text: {
    textTransform: "uppercase",
  },
});
