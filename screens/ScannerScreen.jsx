import { useContext } from "react";
import BarCodeScannerElemet from "../components/BarCodeScannerElemet";
import DataContext from "../context/data-context";
const ScanerScreen = ({ route, navigation }) => {
  const ctx = useContext(DataContext);
  const scanHandler = (code) => {
    console.log(code);
    if (ctx.items.find((item) => item.code == code)) {
      navigation.navigate("Item", { code });
    } else navigation.navigate("Edit", { code });
  };
  return <BarCodeScannerElemet onScan={scanHandler}></BarCodeScannerElemet>;
};

export default ScanerScreen;
