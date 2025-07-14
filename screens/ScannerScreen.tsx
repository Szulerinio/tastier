import React, { useContext } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import CameraElement from '../components/CameraElement';
import DataContext from '../context/data-context';
import { Item } from '../types/models';

type RootStackParamList = {
  Home: undefined;
  Item: { code: string };
  Edit: { code: string };
};

type Route = {
  name: keyof RootStackParamList;
  params: RootStackParamList[keyof RootStackParamList];
};

interface ScannerScreenProps {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  navigation: NavigationProp<RootStackParamList>;
}

const ScannerScreen: React.FC<ScannerScreenProps> = ({ route, navigation }) => {
  const ctx = useContext(DataContext);

  const scanHandler = (code: string) => {
    const routes: Route[] = [{ name: 'Home', params: undefined }];
    if (ctx.items.find((item: Item) => item.id === code)) {
      routes.push({ name: 'Item', params: { code } });
    } else {
      routes.push({ name: 'Edit', params: { code } });
    }
    navigation.reset({
      index: 1,
      routes,
    });
  };

  return <CameraElement onScan={scanHandler} />;
};

export default ScannerScreen;
