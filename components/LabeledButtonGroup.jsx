import { ButtonGroup } from "react-native-elements";

import { Text } from "react-native";
import labeledComponentStyle from "./styles/labeledComponentStyle";

import { useTheme } from '@react-navigation/native';


function LabeledButtonGroup(props) {
  
  const { colors } = useTheme();
  const { label, onChange, selectedIndexes, selectMultiple } = props;
  const changeHandler = (event) => {
    onChange(event);
  };

  const buttons = selectMultiple ? (
    <ButtonGroup
    selectedButtonStyle={{backgroundColor: colors.primary}}
    buttonStyle={{backgroundColor:colors.card}}
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
    selectedButtonStyle={{backgroundColor: colors.primary}}
    buttonStyle={{backgroundColor:colors.card}}
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
