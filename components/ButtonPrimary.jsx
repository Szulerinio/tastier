import { Button } from "react-native";

import { useTheme } from '@react-navigation/native';
function ButtonPrimary(props) {
  const { colors } = useTheme();
  return (
    <Button {...props} color={colors.primary}></Button>
  );
}
export default ButtonPrimary