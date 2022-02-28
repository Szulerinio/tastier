import { StyleSheet, Text, TextInput } from "react-native";
import labeledComponentStyle from "./styles/labeledComponentStyle";

function LabeledTextInput(props) {
  const { label, onChange, value, maxLength } = props;
  const changeHandler = (event) => {
    onChange(event);
  };

  return (
    <>
      <Text style={labeledComponentStyle.label}>{label}</Text>
      <TextInput
        style={styles.input}
        label={label}
        type="text"
        name={label}
        value={value}
        maxLength={maxLength}
        id=""
        onChangeText={changeHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    marginHorizontal: 12,
    marginBottom: 20,
    paddingBottom: 2,
  },
});
export default LabeledTextInput;
