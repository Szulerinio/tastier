import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Overlay } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../App';

interface OverlayThemedProps {
  children: React.ReactNode;
  onBackdropPress?: () => void;
  overlayStyle?: StyleProp<ViewStyle>;
}

const OverlayThemed: React.FC<OverlayThemedProps> = ({
  children,
  onBackdropPress,
  overlayStyle,
}) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <Overlay
      isVisible={true}
      onBackdropPress={onBackdropPress}
      overlayStyle={[
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderWidth: 1,
          padding: 20,
        },
        overlayStyle,
      ]}
    >
      {children}
    </Overlay>
  );
};

export default OverlayThemed;
