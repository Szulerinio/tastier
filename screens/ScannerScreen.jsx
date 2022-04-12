import { useContext } from "react";
import BarCodeScannerElemet from "../components/BarCodeScannerElemet";
import DataContext from "../context/data-context";

const ScanerScreen = ({ route, navigation }) => {
  const ctx = useContext(DataContext);

  const scanHandler = (code) => {
    const routes = [{ name: "Home", params: undefined }];
    if (ctx.items.find((item) => item.code == code)) {
      routes.push({ name: "Item", params: { code: code } });
    } else {
      routes.push({ name: "Edit", params: { code: code } });
    }
    navigation.reset({
      index: 1,
      routes: routes,
    });
  };
  return <BarCodeScannerElemet onScan={scanHandler}></BarCodeScannerElemet>;
};

export default ScanerScreen;
