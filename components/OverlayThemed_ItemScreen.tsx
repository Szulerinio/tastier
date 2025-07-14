import React from 'react';
import { StyleSheet } from 'react-native';
import OverlayThemed from './OverlayThemed';
import TextThemed from './TextThemed';
import ButtonPrimary from './ButtonPrimary';
import ButtonDanger from './ButtonDanger';

interface EditOverlayProps {
  onPressEdit: () => void;
  onDeletePress: () => void;
  onBackdropPress: () => void;
}

interface ConfirmOverlayProps {
  onPressReturn: () => void;
  onConfrimDelete: () => void;
  onBackdropPress: () => void;
}

interface OverlayThemed_ItemScreenProps {
  idEditOverlayVisible: boolean;
  onPressEdit: () => void;
  onDeletePress: () => void;
  isConfirmOverlayVisible: boolean;
  onBackdropPress: () => void;
  onPressReturn: () => void;
  onConfrimDelete: () => void;
}

const EditOverlay: React.FC<EditOverlayProps> = ({
  onPressEdit,
  onDeletePress,
  onBackdropPress,
}) => {
  return (
    <OverlayThemed isVisible onBackdropPress={onBackdropPress}>
      <ButtonPrimary
        title="Edit"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onPressEdit,
        }}
      />
      <ButtonDanger
        title="Delete"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onDeletePress,
        }}
      />
    </OverlayThemed>
  );
};

const ConfirmOverlay: React.FC<ConfirmOverlayProps> = ({
  onPressReturn,
  onConfrimDelete,
  onBackdropPress,
}) => {
  return (
    <OverlayThemed isVisible onBackdropPress={onBackdropPress}>
      <TextThemed>Are you sure? This cannot be undone</TextThemed>
      <ButtonDanger
        title="Delete"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onConfrimDelete,
        }}
      />
      <ButtonPrimary
        title="Return"
        buttonStyle={styles.button}
        buttonProps={{
          onPress: onPressReturn,
        }}
      />
    </OverlayThemed>
  );
};

const OverlayThemed_ItemScreen: React.FC<OverlayThemed_ItemScreenProps> = ({
  idEditOverlayVisible,
  onPressEdit,
  onDeletePress,
  isConfirmOverlayVisible,
  onBackdropPress,
  onPressReturn,
  onConfrimDelete,
}) => {
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
};

const styles = StyleSheet.create({
  button: {
    margin: '3%',
    minWidth: '50%',
  },
});

export default OverlayThemed_ItemScreen;
