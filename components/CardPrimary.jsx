import { Card } from "react-native-elements"
import { useTheme } from "@react-navigation/native"
function CardPrimary(props) {
    const {colors} = useTheme();
    return(<Card {...props} containerStyle={{backgroundColor:colors.card, borderWidth:0}} wrapperStyle={{color:'#ff1133'}}>
    </Card>)
}
export default CardPrimary