import { ButtonGroup } from "react-native-elements";

import { Text } from "react-native";
import labeledComponentStyle from "./styles/labeledComponentStyle";

function LabeledButtonGroup(props) {
  const { label, onChange, selectedIndexes, selectMultiple } = props;
  const changeHandler = (event) => {
    onChange(event);
  };

  const buttons = selectMultiple ? (
    <ButtonGroup
      buttons={["0", "1", "2", "3", "4", "5"]}
      selectedIndexes={selectedIndexes}
      selectMultiple
      onPress={(value) => {
        changeHandler(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
  ) : (
    <ButtonGroup
      buttons={["0", "1", "2", "3", "4", "5"]}
      selectedIndex={selectedIndexes}
      onPress={(value) => {
        changeHandler(value);
      }}
      containerStyle={{ marginBottom: 20 }}
    />
  );

  return (
    <>
      <Text style={labeledComponentStyle.label}>{label}</Text>
      {buttons}
    </>
  );
}

export default LabeledButtonGroup;
