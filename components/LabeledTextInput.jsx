import { StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

function LabeledTextInput(props) {
  const { label, onChange } = props;
  const changeHandler = (event) => {
    console.log(event);
    onChange(event);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        label={label}
        type="text"
        name={label}
        id=""
        onChangeText={changeHandler}
      />
    </View>
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
