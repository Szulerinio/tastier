import { ButtonGroup } from "react-native-elements";
import { Text } from "react-native";
import labeledComponentStyle from "./styles/labeledComponentStyle";
import { useTheme } from "@react-navigation/native";

function LabeledButtonGroup(props) {
  const { colors } = useTheme();
  const { label, onChange, selectedIndexes, selectMultiple } = props;

  const sharedProps = {
    selectedButtonStyle: { backgroundColor: colors.primary },
    selectedTextStyle: { color: colors.primaryText },
    buttonStyle: { backgroundColor: colors.card },
    innerBorderStyle: { color: colors.border, width: 1 },
    textStyle: { color: colors.text },
    buttons: ["0", "1", "2", "3", "4", "5"],
    onPress: (value) => {
      onChange(value);
    },
    containerStyle: {
      marginBottom: 20,
      ...{
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.border, // ButtonGorup has broken pixels, proabaly should write this compoenent by myself
      },
    },
  };

  const buttons = selectMultiple ? (
    <ButtonGroup
      {...sharedProps}
      selectedIndexes={selectedIndexes}
      selectMultiple
    />
  ) : (
    <ButtonGroup {...sharedProps} selectedIndex={selectedIndexes} />
  );

  return (
    <>
      <Text style={{ ...labeledComponentStyle.label, color: colors.primary }}>
        {label}
      </Text>
      {buttons}
    </>
  );
}

export default LabeledButtonGroup;
