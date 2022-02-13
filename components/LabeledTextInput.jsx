import { StyleSheet, Text, TextInput } from "react-native";

function LabeledTextInput(props) {
  const { label, onChange, value } = props;
  const changeHandler = (event) => {
    onChange(event);
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        label={label}
        type="text"
        name={label}
        value={value}
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
    margin: 12,
    paddingBottom: 10,
  },
  label: {
    marginHorizontal: 12,
    marginBottom: 1,
    padding: 10,
  },
});
export default LabeledTextInput;
