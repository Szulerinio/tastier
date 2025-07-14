import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ButtonPrimaryProps } from '../types/camera';

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  buttonStyle,
  buttonProps,
  textStyle,
  title,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        ...styles.button,
        ...buttonStyle,
        backgroundColor: colors.primary,
      }}
    >
      {children}
      <Text style={{ ...styles.text, ...textStyle, color: colors.primaryText }}>{title}</Text>
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

export default ButtonPrimary;
