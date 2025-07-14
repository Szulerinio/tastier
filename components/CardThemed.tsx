import React from 'react';
import { Card } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';
import { CustomTheme } from '../App';

interface CardThemedProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const CardThemed: React.FC<CardThemedProps> = ({ children, containerStyle }) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <Card
      containerStyle={[
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          margin: 5,
        },
        containerStyle,
      ]}
    >
      {children}
    </Card>
  );
};

export default CardThemed;
