import { useState } from "react";
import BarCodeScannerElemet from "../components/BarCodeScannerElemet";

const ScanerScreen = ({ route, navigation }) => {
  const scanHandler = (code) => {
    console.log(code);
    navigation.navigate("Edit", { code });
  };
  return <BarCodeScannerElemet onScan={scanHandler}></BarCodeScannerElemet>;
};

export default ScanerScreen;
