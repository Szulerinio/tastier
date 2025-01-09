import { Card } from "@rneui/themed";
import { useTheme } from "@react-navigation/native";
function CardThemed({ containerStyle, ...rest }) {
  const { colors } = useTheme();
  return (
    <Card
      {...rest}
      containerStyle={{
        ...containerStyle,
        backgroundColor: colors.card,
        borderWidth: 0,
      }}
    ></Card>
  );
}
export default CardThemed;
