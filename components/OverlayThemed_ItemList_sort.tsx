import OverlayThemed from './OverlayThemed';
import ButtonPrimary from './ButtonPrimary';
import { View, StyleSheet } from 'react-native';
import TextThemed from './TextThemed';
import { SortableItemFields } from '../types/models';

interface OverlayThemedItemListSortProps {
  isVisible: boolean;
  toggleOverlay: () => void;
  sortBy: SortableItemFields | '';
  setSortBy: (value: SortableItemFields | '') => void;
  isSortAscending: boolean;
  setIsSortAscending: (value: boolean) => void;
}

const OverlayThemed_ItemList_sort: React.FC<OverlayThemedItemListSortProps> = ({
  isVisible,
  toggleOverlay,
  sortBy,
  setSortBy,
  isSortAscending,
  setIsSortAscending,
}) => {
  return (
    isVisible && (
      <OverlayThemed onBackdropPress={toggleOverlay} overlayStyle={{ flexDirection: 'row' }}>
        <View>
          <TextThemed style={{ textAlign: 'center' }}>Sort by:</TextThemed>
          {(['type', 'brand', 'name', 'rate'] as const).map((value, index) => (
            <View
              key={index}
              style={{
                opacity: sortBy === value ? 1 : 0.2,
              }}
            >
              <ButtonPrimary
                buttonStyle={styles.button}
                title={value}
                buttonProps={{
                  onPress: () => {
                    setSortBy(value);
                  },
                }}
              />
            </View>
          ))}
          <ButtonPrimary
            buttonStyle={styles.button}
            title={isSortAscending ? 'Ascending' : 'Descending'}
            buttonProps={{
              onPress: () => setIsSortAscending(!isSortAscending),
            }}
          />
        </View>
      </OverlayThemed>
    )
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
});

export default OverlayThemed_ItemList_sort;
