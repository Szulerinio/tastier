import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import ButtonPrimary from "./ButtonPrimary";

export default function CameraElemet(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isTorchOn, setIsTorchOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.onScan(data);
  };
  const handleTorchButtonClick = () => {
    console.log(isTorchOn);
    setIsTorchOn(!isTorchOn);
  };
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {/* <View style={StyleSheet.absoluteFillObject}> */}
      <View style={{ aspectRatio: 3 / 4, width: "100%" }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ratio="4:3"
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          flashMode={isTorchOn ? "torch" : "off"}
        ></Camera>
        <ButtonPrimary
          buttonProps={{
            onPress: handleTorchButtonClick,
          }}
          title={"Toggle flashlight"}
        ></ButtonPrimary>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
