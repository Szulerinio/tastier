import { BarcodeScanningResult } from 'expo-camera';
import { StyleProp, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

export interface CameraElementProps {
  onScan: (data: string) => void;
}

export interface ButtonPrimaryProps {
  buttonProps: TouchableOpacityProps & {
    onPress: () => void;
  };
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
