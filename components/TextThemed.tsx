import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../App';

interface TextThemedProps extends TextProps {
  children: React.ReactNode;
}

const TextThemed: React.FC<TextThemedProps> = ({ style, children, ...rest }) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <Text {...rest} style={[{ color: colors.text }, style]}>
      {children}
    </Text>
  );
};

export default TextThemed;
