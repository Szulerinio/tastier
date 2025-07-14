import React, { useContext, useState } from 'react';
import { Image, useColorScheme, TouchableOpacity } from 'react-native';
import DataContext from '../context/data-context';
import CardThemed from '../components/CardThemed';
import TextThemed from '../components/TextThemed';
import OverlayThemed_ItemScreen from '../components/OverlayThemed_ItemScreen';
import { ItemScreenProps } from '../types/navigation';
import { DataContextType } from '../types/context';

const ItemScreen: React.FC<ItemScreenProps> = ({ route, navigation }) => {
  const { item } = route.params || {};
  const scheme = useColorScheme();
  const ctx = useContext(DataContext) as DataContextType;
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [confirmOverlayVisible, setConfirmOverlayVisible] = useState(false);

  if (!item) {
    return <TextThemed>Item not found</TextThemed>;
  }

  const { code, type, brand, name, rate } = item;

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const toggleConfirmOverlay = () => {
    setConfirmOverlayVisible(!confirmOverlayVisible);
  };

  const handleDelete = () => {
    ctx.deleteData({ code, type, brand, name, rate });
    navigation.navigate('ItemList', {
      params: {
        type: '',
        brand: '',
        name: '',
        rate: [],
      },
    });
  };

  const onPressEdit = () => {
    toggleOverlay();
    navigation.navigate('EditItem', { item });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleOverlay}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={
              scheme === 'dark'
                ? require('../assets/pencilLight.png')
                : require('../assets/pencilDark.png')
            }
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, toggleOverlay]);

  return (
    <CardThemed>
      <TextThemed>{`code: ${code}`}</TextThemed>
      <TextThemed>{`type: ${type}`}</TextThemed>
      <TextThemed>{`brand: ${brand}`}</TextThemed>
      <TextThemed>{`name: ${name}`}</TextThemed>
      <TextThemed>{`rate: ${rate}`}</TextThemed>
      <OverlayThemed_ItemScreen
        idEditOverlayVisible={overlayVisible}
        onPressEdit={onPressEdit}
        onDeletePress={toggleConfirmOverlay}
        isConfirmOverlayVisible={confirmOverlayVisible}
        onPressReturn={toggleConfirmOverlay}
        onConfrimDelete={handleDelete}
        onBackdropPress={() => {
          setConfirmOverlayVisible(false);
          setOverlayVisible(false);
        }}
      />
    </CardThemed>
  );
};

export default ItemScreen;
