import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import labeledComponentStyle from './styles/labeledComponentStyle';
import { CustomTheme } from '../App';

interface LabeledTextInputProps extends Omit<TextInputProps, 'onChange' | 'value'> {
  label: string;
  onChange: (text: string) => void;
  value: string | number;
  maxLength?: number;
  textStyle?: TextStyle;
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({
  label,
  onChange,
  value,
  maxLength,
  onBlur,
  textStyle,
  ...rest
}) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <>
      <Text style={[labeledComponentStyle.label, { color: colors.primary }]}>{label}</Text>
      <TextInput
        {...rest}
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
          },
          textStyle,
        ]}
        onBlur={onBlur}
        value={String(value)}
        maxLength={maxLength}
        onChangeText={onChange}
      />
    </>
  );
};

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
