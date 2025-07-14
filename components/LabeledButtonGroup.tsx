import React from 'react';
import { Text } from 'react-native';
import { ButtonGroup, ButtonGroupProps } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import labeledComponentStyle from './styles/labeledComponentStyle';
import { CustomTheme } from '../App';

interface LabeledButtonGroupProps {
  label: string;
  onChange: (value: number | number[]) => void;
  selectedIndexes: number | number[];
  selectMultiple?: boolean;
}

const LabeledButtonGroup: React.FC<LabeledButtonGroupProps> = ({
  label,
  onChange,
  selectedIndexes,
  selectMultiple,
}) => {
  const { colors } = useTheme() as CustomTheme;

  const sharedProps: Partial<ButtonGroupProps> = {
    selectedButtonStyle: { backgroundColor: colors.primary },
    selectedTextStyle: { color: colors.primaryText },
    buttonStyle: { backgroundColor: colors.card },
    innerBorderStyle: { color: colors.border, width: 1 },
    textStyle: { color: colors.text },
    buttons: ['0', '1', '2', '3', '4', '5'],
    onPress: value => {
      onChange(value);
    },
    containerStyle: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.border, // ButtonGroup has broken pixels, probably should write this component by myself
    },
  };

  const buttons = selectMultiple ? (
    <ButtonGroup {...sharedProps} selectedIndexes={selectedIndexes as number[]} selectMultiple />
  ) : (
    <ButtonGroup {...sharedProps} selectedIndex={selectedIndexes as number} />
  );

  return (
    <>
      <Text style={[labeledComponentStyle.label, { color: colors.primary }]}>{label}</Text>
      {buttons}
    </>
  );
};

export default LabeledButtonGroup;
