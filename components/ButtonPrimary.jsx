import { Button, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';
function ButtonPrimary(props) {
  const { colors } = useTheme();
  const {buttonStyle, buttonProps, textStyle, title} = props


  return (
  <TouchableOpacity  
  {...buttonProps}style={{...styles.button, ...buttonStyle, backgroundColor: colors.primary}}>
    <Text style={{...styles.text, ...textStyle, color:colors.primaryText}}> {title} </Text>
  </TouchableOpacity>

  );
}
export default ButtonPrimary
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius:2
  },
  text:{
    textTransform:"uppercase"
  }
})