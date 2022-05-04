import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
function ButtonDanger(props) {
  const { colors } = useTheme();
  const { buttonStyle, buttonProps, textStyle, title, children } = props;

  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        ...styles.button,
        ...buttonStyle,
        backgroundColor: colors.danger,
      }}
    >
      <Text style={{ ...styles.text, ...textStyle, color: colors.primaryText }}>
        {title}
      </Text>
      {children}
    </TouchableOpacity>
  );
}
export default ButtonDanger;
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
