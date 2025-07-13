# API Documentation

## Overview

This is a React Native/Expo application for inventory management with barcode scanning functionality. The app allows users to scan barcodes, add/edit items, filter and sort inventory, and export data to PDF.

## Table of Contents

1. [Components](#components)
2. [Screens](#screens)
3. [Context API](#context-api)
4. [Main App](#main-app)
5. [Usage Examples](#usage-examples)

## Components

### AutocompleteLabeledTextInput

A text input component with autocomplete functionality and labeling.

**Props:**
- `label` (string): The label text to display above the input
- `onChange` (function): Callback function called when text changes
- `value` (string): Current value of the input
- `maxLength` (number): Maximum number of characters allowed
- `autocompleteData` (array): Array of strings for autocomplete suggestions

**Usage:**
```javascript
import AutocompleteLabeledTextInput from './components/AutocompleteLabeledTextInput';

<AutocompleteLabeledTextInput
  label="Product Type"
  value={currentValue}
  onChange={(value) => setCurrentValue(value)}
  maxLength={20}
  autocompleteData={['Electronics', 'Clothing', 'Books']}
/>
```

**Features:**
- Filters autocomplete suggestions based on input
- Displays up to 3 suggestions at a time
- Handles accent removal for better matching
- Requires `keyboardShouldPersistTaps="hadled"` on parent ScrollView

---

### ButtonDanger

A danger-styled button with red coloring for destructive actions.

**Props:**
- `title` (string): Text to display on the button
- `buttonStyle` (object): Additional style object for the button
- `buttonProps` (object): Props to pass to the TouchableOpacity
- `textStyle` (object): Additional style object for the text
- `children` (ReactNode): Child elements to render inside the button

**Usage:**
```javascript
import ButtonDanger from './components/ButtonDanger';

<ButtonDanger
  title="Delete Item"
  buttonProps={{
    onPress: handleDelete,
  }}
  buttonStyle={{ margin: 10 }}
/>
```

**Features:**
- Automatically applies danger theme color
- Supports text transformation (uppercase)
- Themeable with React Navigation theme

---

### ButtonPrimary

A primary-styled button with main theme coloring.

**Props:**
- `title` (string): Text to display on the button
- `buttonStyle` (object): Additional style object for the button
- `buttonProps` (object): Props to pass to the TouchableOpacity
- `textStyle` (object): Additional style object for the text
- `children` (ReactNode): Child elements to render inside the button

**Usage:**
```javascript
import ButtonPrimary from './components/ButtonPrimary';

<ButtonPrimary
  title="Save Changes"
  buttonProps={{
    onPress: handleSave,
  }}
  buttonStyle={{ margin: 10 }}
>
  <Icon name="save" />
</ButtonPrimary>
```

**Features:**
- Automatically applies primary theme color
- Supports text transformation (uppercase)
- Themeable with React Navigation theme

---

### CameraElement

A camera component for barcode scanning with torch functionality.

**Props:**
- `onScan` (function): Callback function called when barcode is scanned, receives scanned data

**Usage:**
```javascript
import CameraElement from './components/CameraElement';

<CameraElement
  onScan={(data) => {
    console.log('Scanned:', data);
    // Handle scanned data
  }}
/>
```

**Features:**
- Supports multiple barcode formats (QR, EAN13, EAN8, Code128, etc.)
- Built-in torch/flashlight toggle
- Automatic permission handling
- Prevents multiple scans until reset

**Supported Barcode Types:**
- aztec, ean13, ean8, qr, pdf417, upc_e, datamatrix, code39, code93, itf14, codabar, code128, upc_a

---

### CardThemed

A themed card component wrapper around React Native Elements Card.

**Props:**
- `containerStyle` (object): Style object for the card container
- `...rest`: All other props passed to the underlying Card component

**Usage:**
```javascript
import CardThemed from './components/CardThemed';

<CardThemed containerStyle={{ margin: 10 }}>
  <Text>Card content</Text>
</CardThemed>
```

**Features:**
- Automatically applies theme colors
- Removes default border
- Fully compatible with React Native Elements Card props

---

### ItemListElement

A component for displaying an item in a list with navigation.

**Props:**
- `data` (object): Item data object with properties:
  - `code` (string): Item barcode/ID
  - `type` (string): Item type/category
  - `brand` (string): Item brand
  - `name` (string): Item name
  - `rate` (number): Item rating (0-5)
- `navigation` (object): React Navigation navigation object

**Usage:**
```javascript
import ItemListElement from './components/ItemListElement';

<ItemListElement
  data={{
    code: "123456789",
    type: "Electronics",
    brand: "Apple",
    name: "iPhone 12",
    rate: 5
  }}
  navigation={navigation}
/>
```

**Features:**
- Displays item information in a formatted layout
- Clickable to navigate to item detail screen
- Uses themed components for consistent styling

---

### LabeledButtonGroup

A button group component with label for selecting options.

**Props:**
- `label` (string): Label text to display above the button group
- `onChange` (function): Callback function called when selection changes
- `selectedIndexes` (number|array): Currently selected index(es)
- `selectMultiple` (boolean): Whether multiple selections are allowed

**Usage:**
```javascript
import LabeledButtonGroup from './components/LabeledButtonGroup';

// Single selection
<LabeledButtonGroup
  label="Rating"
  selectedIndexes={selectedRating}
  onChange={(value) => setSelectedRating(value)}
/>

// Multiple selection
<LabeledButtonGroup
  label="Ratings"
  selectedIndexes={selectedRatings}
  onChange={(values) => setSelectedRatings(values)}
  selectMultiple={true}
/>
```

**Features:**
- Supports single or multiple selection
- Displays rating buttons (0-5)
- Themed with React Navigation colors
- Automatic border styling

---

### LabeledTextInput

A text input component with a label.

**Props:**
- `label` (string): Label text to display above the input
- `onChange` (function): Callback function called when text changes
- `value` (string): Current value of the input
- `maxLength` (number): Maximum number of characters allowed
- `onBlur` (function): Callback function called when input loses focus
- `...rest`: Additional props passed to TextInput

**Usage:**
```javascript
import LabeledTextInput from './components/LabeledTextInput';

<LabeledTextInput
  label="Product Name"
  value={productName}
  onChange={(value) => setProductName(value)}
  maxLength={40}
  onBlur={() => console.log('Input lost focus')}
/>
```

**Features:**
- Themed with React Navigation colors
- Consistent styling with other labeled components
- Supports all TextInput props

---

### OverlayThemed

A themed overlay component wrapper around React Native Elements Overlay.

**Props:**
- `children` (ReactNode): Content to display in the overlay
- `overlayStyle` (object): Additional style object for the overlay
- `...rest`: All other props passed to the underlying Overlay component

**Usage:**
```javascript
import OverlayThemed from './components/OverlayThemed';

<OverlayThemed
  isVisible={isVisible}
  onBackdropPress={() => setIsVisible(false)}
  overlayStyle={{ width: '80%' }}
>
  <Text>Overlay content</Text>
</OverlayThemed>
```

**Features:**
- Automatically applies theme background color
- Default padding of 20
- Fully compatible with React Native Elements Overlay props

---

### TextPrimary

A text component with primary theme color.

**Props:**
- `style` (object): Additional style object for the text
- `...rest`: All other props passed to the underlying Text component

**Usage:**
```javascript
import TextPrimary from './components/TextPrimary';

<TextPrimary style={{ fontSize: 16 }}>
  Primary colored text
</TextPrimary>
```

**Features:**
- Automatically applies primary text color from theme
- Supports all Text component props

---

### TextThemed

A text component with themed text color.

**Props:**
- `style` (object): Additional style object for the text
- `...rest`: All other props passed to the underlying Text component

**Usage:**
```javascript
import TextThemed from './components/TextThemed';

<TextThemed style={{ fontSize: 16 }}>
  Themed text
</TextThemed>
```

**Features:**
- Automatically applies theme text color
- Supports all Text component props

---

## Screens

### HomeScreen

The main navigation screen with three primary actions.

**Props:**
- `navigation` (object): React Navigation navigation object

**Features:**
- Scan barcode button
- Search products button
- View all items button
- Adaptive icons for light/dark themes
- Hidden header

**Navigation Actions:**
- Navigate to Scanner screen
- Navigate to Filter screen with empty filters
- Navigate to List screen with empty filters

---

### ItemListScreen

Displays a list of items with filtering, sorting, and PDF export capabilities.

**Props:**
- `route` (object): Route object containing filter parameters
- `navigation` (object): React Navigation navigation object

**Route Parameters:**
- `type` (string): Filter by item type
- `brand` (string): Filter by item brand
- `name` (string): Filter by item name
- `rate` (array): Filter by item ratings

**Features:**
- Filter items by type, brand, name, and rating
- Sort items by type, brand, name, or rating (ascending/descending)
- Export filtered results to PDF
- Navigate to item details
- Real-time filtering and sorting

**API Functions:**
- `filter(data, filters)`: Filters items based on provided criteria
- `sortItems(items, type, isSortAscending)`: Sorts items by specified field
- `printToPDF()`: Exports current view to PDF and shares it

---

### FiltersScreen

Screen for setting up filters to search for items.

**Props:**
- `route` (object): Route object containing current filter values
- `navigation` (object): React Navigation navigation object

**Route Parameters:**
- `type` (string): Current type filter
- `brand` (string): Current brand filter
- `name` (string): Current name filter
- `rate` (array): Current rating filters

**Features:**
- Autocomplete text inputs for type, brand, and name
- Multiple selection for ratings
- Real-time filter updates
- Navigate to filtered item list

---

### ItemScreen

Displays detailed information about a single item.

**Props:**
- `route` (object): Route object containing item code
- `navigation` (object): React Navigation navigation object

**Route Parameters:**
- `code` (string): Unique identifier for the item

**Features:**
- Display all item properties
- Edit item functionality
- Delete item with confirmation
- Navigation header with edit button

---

### EditItemScreen

Screen for editing existing items or creating new ones.

**Props:**
- `route` (object): Route object containing item code
- `navigation` (object): React Navigation navigation object

**Route Parameters:**
- `code` (string): Item code (for editing) or new code (for creation)

**Features:**
- Autocomplete for type, brand, and name fields
- Rating selection
- Form validation
- Save functionality with navigation reset for new items
- Navigation header with save button

---

### ScannerScreen

Screen that displays the camera for barcode scanning.

**Props:**
- `route` (object): Route object
- `navigation` (object): React Navigation navigation object

**Features:**
- Full-screen camera view
- Automatic item lookup after scan
- Navigation to item detail (if exists) or edit screen (if new)
- Navigation reset to prevent back navigation issues

---

## Context API

### DataProvider

The main data provider component that manages application state and database operations.

**Provides:**
- `items` (array): Array of all items in the database
- `editData` (function): Function to add or update an item
- `deleteData` (function): Function to delete an item

**Usage:**
```javascript
import DataProvider from './context/DataProvider';

<DataProvider>
  <App />
</DataProvider>
```

**Database Operations:**
- `updateDatabase(obj)`: Updates an existing item
- `insertIntoDatabase(obj)`: Inserts a new item
- `checkIfInDatabase(obj)`: Checks if item exists
- `deleteFromDatabase(obj)`: Deletes an item
- `selectAndUpdateState()`: Refreshes state from database

---

### DataContext

The React context definition for accessing data throughout the app.

**Usage:**
```javascript
import { useContext } from 'react';
import DataContext from './context/data-context';

const MyComponent = () => {
  const ctx = useContext(DataContext);
  
  // Access items
  const items = ctx.items;
  
  // Add or update item
  ctx.editData({
    code: "123456789",
    type: "Electronics",
    brand: "Apple",
    name: "iPhone 12",
    rate: 5
  });
  
  // Delete item
  ctx.deleteData({ code: "123456789" });
};
```

**Context Structure:**
```javascript
{
  items: [
    {
      code: "string",
      type: "string",
      brand: "string",
      name: "string",
      rate: number
    }
  ],
  editData: (item) => void,
  deleteData: (item) => void
}
```

---

## Main App

### App.tsx

The root component that sets up navigation and theming.

**Features:**
- React Navigation setup with native stack navigator
- Dark/light theme support
- Safe area handling
- Data provider wrapper
- Navigation configuration

**Navigation Stack:**
- Home → HomeScreen
- List → ItemListScreen  
- Filter → FiltersScreen
- Item → ItemScreen
- Edit → EditItemScreen
- Scanner → ScannerScreen

**Theme Configuration:**
- Automatic dark/light mode detection
- Custom color schemes for both themes
- Consistent theming across all components

---

## Usage Examples

### Basic Item Management

```javascript
import { useContext, useState } from 'react';
import DataContext from './context/data-context';
import LabeledTextInput from './components/LabeledTextInput';
import ButtonPrimary from './components/ButtonPrimary';

const ItemForm = () => {
  const ctx = useContext(DataContext);
  const [formData, setFormData] = useState({
    code: '',
    type: '',
    brand: '',
    name: '',
    rate: 0
  });

  const handleSave = () => {
    ctx.editData(formData);
  };

  return (
    <>
      <LabeledTextInput
        label="Product Code"
        value={formData.code}
        onChange={(value) => setFormData({...formData, code: value})}
      />
      <LabeledTextInput
        label="Type"
        value={formData.type}
        onChange={(value) => setFormData({...formData, type: value})}
      />
      <ButtonPrimary
        title="Save"
        buttonProps={{ onPress: handleSave }}
      />
    </>
  );
};
```

### Scanner Integration

```javascript
import CameraElement from './components/CameraElement';
import { useContext } from 'react';
import DataContext from './context/data-context';

const ScannerExample = ({ navigation }) => {
  const ctx = useContext(DataContext);

  const handleScan = (code) => {
    const existingItem = ctx.items.find(item => item.code === code);
    
    if (existingItem) {
      // Navigate to existing item
      navigation.navigate('Item', { code });
    } else {
      // Navigate to create new item
      navigation.navigate('Edit', { code });
    }
  };

  return (
    <CameraElement onScan={handleScan} />
  );
};
```

### Custom Filtering

```javascript
const filterItems = (items, filters) => {
  return items.filter(item => {
    const matchesType = !filters.type || 
      item.type.toLowerCase().includes(filters.type.toLowerCase());
    const matchesBrand = !filters.brand || 
      item.brand.toLowerCase().includes(filters.brand.toLowerCase());
    const matchesName = !filters.name || 
      item.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesRating = !filters.rate.length || 
      filters.rate.includes(item.rate);
    
    return matchesType && matchesBrand && matchesName && matchesRating;
  });
};
```

### Theming Integration

```javascript
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';

const ThemedComponent = () => {
  const { colors } = useTheme();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>
        This text automatically adapts to theme
      </Text>
    </View>
  );
};
```

---

## Dependencies

### Key Dependencies
- **React Navigation**: Navigation and theming
- **Expo**: Camera, SQLite, Print, Sharing
- **React Native Elements**: UI components
- **React Native**: Core framework

### Database Schema
```sql
CREATE TABLE items (
  code INTEGER,
  type TEXT,
  brand TEXT,
  name TEXT,
  rate INTEGER
);
```

### File Structure
```
├── components/
│   ├── AutocompleteLabeledTextInput.jsx
│   ├── ButtonDanger.jsx
│   ├── ButtonPrimary.jsx
│   ├── CameraElement.tsx
│   ├── CardThemed.jsx
│   ├── ItemListElement.jsx
│   ├── LabeledButtonGroup.jsx
│   ├── LabeledTextInput.jsx
│   ├── OverlayThemed.jsx
│   ├── OverlayThemed_ItemList_sort.jsx
│   ├── OverlayThemed_ItemScreen.jsx
│   ├── TextPrimary.jsx
│   ├── TextThemed.jsx
│   └── styles/
│       └── labeledComponentStyle.jsx
├── context/
│   ├── DataProvider.jsx
│   └── data-context.jsx
├── screens/
│   ├── EditItemScreen.jsx
│   ├── FiltersScreen.jsx
│   ├── HomeScreen.jsx
│   ├── ItemListScreen.jsx
│   ├── ItemScreen.jsx
│   └── ScannerScreen.jsx
└── App.tsx
```

This documentation provides comprehensive coverage of all public APIs, components, and usage patterns in the application.