import React from 'react';
import { View, StyleSheet } from 'react-native';
import OverlayThemed from './OverlayThemed';
import ButtonPrimary from './ButtonPrimary';
import TextThemed from './TextThemed';
import { SortableItemFields } from '../types/models';

interface OverlayThemed_ItemList_sortProps {
  isVisible: boolean;
  toggleOverlay: () => void;
  sortBy: SortableItemFields;
  setSortBy: (value: SortableItemFields) => void;
  isSortAscending: boolean;
  setIsSortAscending: (value: boolean) => void;
}

const OverlayThemed_ItemList_sort: React.FC<OverlayThemed_ItemList_sortProps> = ({
  isVisible,
  toggleOverlay,
  sortBy,
  setSortBy,
  isSortAscending,
  setIsSortAscending,
}) => {
  const sortFields: SortableItemFields[] = ['name', 'category', 'createdAt', 'updatedAt'];

  return (
    <OverlayThemed
      isVisible={isVisible}
      onBackdropPress={toggleOverlay}
      overlayStyle={{ flexDirection: 'row' }}
    >
      <View>
        <TextThemed style={styles.headerText}>Sort by:</TextThemed>
        {sortFields.map((value, index) => (
          <View
            key={index}
            style={{
              opacity: sortBy === value ? 1 : 0.2,
            }}
            /*View wrapper is needed because TouchableOpacity doesn't
             work with dynamic changes of opacity */
          >
            <ButtonPrimary
              buttonStyle={styles.button}
              title={value}
              buttonProps={{
                onPress: () => setSortBy(value),
              }}
            />
          </View>
        ))}
      </View>
      <View style={styles.orderContainer}>
        <TextThemed style={styles.headerText}>Order:</TextThemed>
        <View
          style={[
            styles.orderButtonContainer,
            {
              opacity: isSortAscending ? 1 : 0.2,
            },
          ]}
          /*View wrapper is needed because TouchableOpacity doesn't
             work with dynamic changes of opacity */
        >
          <ButtonPrimary
            buttonStyle={[styles.button, styles.orderButton]}
            title="ASC"
            buttonProps={{
              onPress: () => setIsSortAscending(true),
            }}
          />
        </View>

        <View
          style={[
            styles.orderButtonContainer,
            {
              opacity: !isSortAscending ? 1 : 0.2,
            },
          ]}
          /*View wrapper is needed because TouchableOpacity doesn't
           work with dynamic changes of opacity */
        >
          <ButtonPrimary
            buttonStyle={[styles.button, styles.orderButton]}
            title="DESC"
            buttonProps={{
              onPress: () => setIsSortAscending(false),
            }}
          />
        </View>
      </View>
    </OverlayThemed>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    minWidth: '20%',
  },
  orderButton: {
    flex: 1,
  },
  orderContainer: {
    height: '100%',
  },
  orderButtonContainer: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
  },
});

export default OverlayThemed_ItemList_sort;
