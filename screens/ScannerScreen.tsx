import { useContext } from 'react';
import CameraElement from '../components/CameraElement';
import DataContext from '../context/data-context';
import { ScannerScreenProps } from '../types/navigation';
import { Item } from '../types/models';

const ScannerScreen: React.FC<ScannerScreenProps> = ({ navigation }) => {
  const ctx = useContext(DataContext);

  const scanHandler = (code: string) => {
    const existingItem = ctx.items.find((item: Item) => item.code === code);

    // First navigate back to home
    navigation.navigate('Home');

    // Then navigate to the appropriate screen
    if (existingItem) {
      navigation.navigate('Item', { item: existingItem });
    } else {
      navigation.navigate('EditItem', { item: { code } as Item });
    }
  };

  return <CameraElement onScan={scanHandler} />;
};

export default ScannerScreen;
