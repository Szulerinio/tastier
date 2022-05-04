import OverlayThemed from "./OverlayThemed";
import TextThemed from "../components/TextThemed";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonDanger from "../components/ButtonDanger";
import { StyleSheet } from "react-native";
function OverlayThemed_ItemScreen({
  idEditOverlayVisible,
  onPressEdit,
  onDeletePress,
  isConfirmOverlayVisible,
  onBackdropPress,
  onPressReturn,
  onConfrimDelete,
}) {
  return (
    <>
      {idEditOverlayVisible && (
        <EditOverlay
          onPressEdit={onPressEdit}
          onDeletePress={onDeletePress}
          onBackdropPress={onBackdropPress}
        />
      )}
      {isConfirmOverlayVisible && (
        <ConfirmOverlay
          onPressReturn={onPressReturn}
          onConfrimDelete={onConfrimDelete}
          onBackdropPress={onBackdropPress}
        />
      )}
    </>
  );
}

function EditOverlay({ onPressEdit, onDeletePress, onBackdropPress }) {
  return (
    <OverlayThemed onBackdropPress={onBackdropPress}>
      <ButtonPrimary
        title="Edit"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onPressEdit,
        }}
      ></ButtonPrimary>
      <ButtonDanger
        title="Delete"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onDeletePress,
        }}
      ></ButtonDanger>
    </OverlayThemed>
  );
}
function ConfirmOverlay({ onPressReturn, onConfrimDelete, onBackdropPress }) {
  return (
    <OverlayThemed onBackdropPress={onBackdropPress}>
      <TextThemed>Are you sure? This cannot be undone</TextThemed>
      <ButtonDanger
        title="Delete"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onConfrimDelete,
        }}
      ></ButtonDanger>
      <ButtonPrimary
        title="Return"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onPressReturn,
        }}
      ></ButtonPrimary>
    </OverlayThemed>
  );
}

export default OverlayThemed_ItemScreen;

const styles = StyleSheet.create({
  button: { margin: "3%", minWidth: "50%" },
});
