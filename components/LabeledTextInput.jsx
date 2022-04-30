import { StyleSheet, Text, TextInput } from "react-native";
import labeledComponentStyle from "./styles/labeledComponentStyle";

import { useTheme } from "@react-navigation/native";
function LabeledTextInput(props) {
  const { label, onChange, value, maxLength, onBlur, ...rest } = props;
  const { colors } = useTheme();
  return (
    <>
      <Text style={{ ...labeledComponentStyle.label, color: colors.primary }}>
        {label}
      </Text>
      <TextInput
        {...rest}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        onBlur={onBlur}
        label={label}
        type="text"
        name={label}
        value={value + ""}
        maxLength={maxLength}
        id=""
        onChangeText={onChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0,
    marginHorizontal: 12,
    marginBottom: 20,
    paddingBottom: 2,
    paddingLeft: 20,
  },
});
export default LabeledTextInput;
