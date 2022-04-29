import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function CameraElemet(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={{ aspectRatio: 3 / 4, width: "100%" }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ratio="4:3"
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ></Camera>
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
