import { StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

function noAccent(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function LabeledTextInput(props) {
  const { label, onChange, value } = props;
  const changeHandler = (event) => {
    // console.log("normalized[0]: " + noAccent(event)[0]);
    // console.log("normalized[1]: " + noAccent(event)[1]);
    // console.log("normalized whole: " + noAccent(event));
    // console.log("not normalized: " + event);
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
        value={value}
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
