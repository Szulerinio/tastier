import React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Overlay, OverlayProps } from '@rneui/themed';
import { CustomTheme } from '../App';

interface OverlayThemedProps extends Omit<OverlayProps, 'overlayStyle'> {
  children: React.ReactNode;
  overlayStyle?: ViewStyle;
}

const OverlayThemed: React.FC<OverlayThemedProps> = ({ children, overlayStyle, ...rest }) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <Overlay
      {...rest}
      overlayStyle={{
        padding: 20,
        backgroundColor: colors.background,
        ...overlayStyle,
      }}
    >
      {children}
    </Overlay>
  );
};

export default OverlayThemed;
