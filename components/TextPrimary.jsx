import { Text } from "react-native";
import { useTheme } from "@react-navigation/native"
function TextPrimary(props) {
    const {colors} = useTheme();
    return(<Text {...props} style={{color:colors.primaryText}}>
    </Text>)
}
export default TextPrimary