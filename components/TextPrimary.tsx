import React from 'react';
import { Text, TextStyle, TextProps } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../App';

interface TextPrimaryProps extends TextProps {
  style?: TextStyle;
}

const TextPrimary: React.FC<TextPrimaryProps> = ({ style, ...rest }) => {
  const { colors } = useTheme() as CustomTheme;
  return <Text {...rest} style={{ ...style, color: colors.primaryText }} />;
};

export default TextPrimary;
