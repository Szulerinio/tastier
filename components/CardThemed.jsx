import { Card } from "react-native-elements"
import { useTheme } from "@react-navigation/native"
function CardThemed(props) {
    const {colors} = useTheme();
    return(<Card {...props} containerStyle={{backgroundColor:colors.card, borderWidth:0}}>
    </Card>)
}
export default CardThemed