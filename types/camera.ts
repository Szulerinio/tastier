import { BarcodeScanningResult } from 'expo-camera';

export interface CameraElementProps {
  onScan: (data: string) => void;
}

export interface ButtonPrimaryProps {
  buttonProps: {
    onPress: () => void;
  };
  title: string;
}
