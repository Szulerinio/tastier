import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';

import ButtonPrimary from './ButtonPrimary';
import { CameraElementProps } from '../types/camera';

export default function CameraElement({ onScan }: CameraElementProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const facing: CameraType = 'back';

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }: BarcodeScanningResult) => {
    setScanned(true);
    onScan(data);
    console.log('type', type);
    console.log('data', data);
  };

  const handleTorchButtonClick = () => {
    console.log(isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  return (
    <View style={styles.container}>
      <View style={{ aspectRatio: 3 / 4, width: '100%' }}>
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          enableTorch={isTorchOn}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: [
              'aztec',
              'ean13',
              'ean8',
              'qr',
              'pdf417',
              'upc_e',
              'datamatrix',
              'code39',
              'code93',
              'itf14',
              'codabar',
              'code128',
              'upc_a',
            ],
          }}
        />
        <ButtonPrimary
          buttonProps={{
            onPress: handleTorchButtonClick,
          }}
          title={'Toggle flashlight'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
