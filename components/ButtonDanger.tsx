import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../App';

interface ButtonDangerProps {
  buttonStyle?: ViewStyle;
  buttonProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  title: string;
  children?: React.ReactNode;
}

const ButtonDanger: React.FC<ButtonDangerProps> = ({
  buttonStyle,
  buttonProps,
  textStyle,
  title,
  children,
}) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      {...buttonProps}
      style={[styles.button, { backgroundColor: colors.danger }, buttonStyle]}
    >
      <Text style={[styles.text, { color: colors.primaryText }, textStyle]}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 2,
  },
  text: {
    textTransform: 'uppercase',
  },
});

export default ButtonDanger;
