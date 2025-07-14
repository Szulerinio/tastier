import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ButtonPrimaryProps } from '../types/camera';
import { CustomTheme } from '../App';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonProps,
  title,
  buttonStyle,
  textStyle,
  children,
}) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      {...buttonProps}
      style={[styles.button, { backgroundColor: colors.primary }, buttonStyle as ViewStyle]}
    >
      <Text style={[styles.text, { color: colors.primaryText }, textStyle as TextStyle]}>
        {title}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonPrimary;
