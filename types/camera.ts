import { TouchableOpacityProps } from 'react-native';

export interface CameraElementProps {
  onScan: (data: string) => void;
}

export interface ButtonPrimaryProps {
  buttonProps?: TouchableOpacityProps;
  title?: string;
  buttonStyle?: object;
  textStyle?: object;
  children?: React.ReactNode;
}
