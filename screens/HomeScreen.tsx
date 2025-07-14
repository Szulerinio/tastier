import { StatusBar } from 'expo-status-bar';
import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreenProps } from '../types/navigation';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const scheme = useColorScheme();

  const getImageSource = (
    lightImage: ImageSourcePropType,
    darkImage: ImageSourcePropType
  ): ImageSourcePropType => {
    return scheme === 'dark' ? lightImage : darkImage;
  };

  const renderButton = (
    title: string,
    onPress: () => void,
    lightIcon: ImageSourcePropType,
    darkIcon: ImageSourcePropType
  ) => (
    <View style={styles.buttonContainer}>
      <ButtonPrimary
        buttonProps={{
          onPress,
        }}
        title={title}
      />
      <Image style={styles.buttonImage} source={getImageSource(lightIcon, darkIcon)} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {renderButton(
          'Scan the barcode',
          () => navigation.navigate('Scanner'),
          require('../assets/codeLight.png'),
          require('../assets/codeDark.png')
        )}
        {renderButton(
          'Search your products',
          () => navigation.navigate('Filters'),
          require('../assets/searchLight.png'),
          require('../assets/searchDark.png')
        )}
        {renderButton(
          'Your items',
          () => navigation.navigate('ItemList'),
          require('../assets/itemsLight.png'),
          require('../assets/itemsDark.png')
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginVertical: '10%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: '10%',
  },
  buttonImage: {
    margin: 10,
  },
});

export default HomeScreen;
