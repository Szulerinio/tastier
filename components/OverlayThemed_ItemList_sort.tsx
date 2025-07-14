import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Overlay } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import ButtonPrimary from './ButtonPrimary';
import TextThemed from './TextThemed';
import { CustomTheme } from '../App';

interface Props {
  visible: boolean;
  toggleOverlay: () => void;
  onSortPress: (sortBy: string) => void;
}

const OverlayThemed_ItemList_sort: React.FC<Props> = ({ visible, toggleOverlay, onSortPress }) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleOverlay}
      overlayStyle={[styles.overlay, { backgroundColor: colors.card }]}
    >
      <View style={styles.container}>
        <TextThemed style={styles.title}>Sort by:</TextThemed>
        <ButtonPrimary buttonProps={{ onPress: () => onSortPress('brand') }} title="Brand" />
        <ButtonPrimary buttonProps={{ onPress: () => onSortPress('name') }} title="Name" />
        <ButtonPrimary buttonProps={{ onPress: () => onSortPress('type') }} title="Type" />
        <ButtonPrimary buttonProps={{ onPress: () => onSortPress('rate') }} title="Rate" />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  overlay: {
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default OverlayThemed_ItemList_sort;
