import { useContext } from "react";
import BarCodeScannerElemet from "../components/BarCodeScannerElemet";
import DataContext from "../context/data-context";
const ScanerScreen = ({ route, navigation }) => {
  console.log("SCANNER SCREEN");
  const ctx = useContext(DataContext);
  const scanHandler = (code) => {
    console.log(code);
    if (ctx.items.find((item) => item.code == code)) {
      const routes = [
        { name: "Home", params: undefined },

        { name: "Item", params: { code: code } },
      ];
      navigation.reset({
        index: 1,
        routes: routes,
      });
    } else {
      const routes = [
        { name: "Home", params: undefined },

        { name: "Edit", params: { code: code } },
      ];
      navigation.reset({
        index: 1,
        routes: routes,
      });
    }
  };
  return <BarCodeScannerElemet onScan={scanHandler}></BarCodeScannerElemet>;
};

export default ScanerScreen;
