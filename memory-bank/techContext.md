# Technical Context

## Technology Stack
### Frontend
- React Native (0.76.5): Mobile UI framework
- Expo SDK (52.0.23): Development platform
- React Navigation (6.1.6): Screen navigation
- RNEUI/Themed (4.0.0-rc.8): UI components
- TypeScript (5.7.3): Type safety

### Backend
- SQLite (expo-sqlite): Local rating storage
- Expo Camera: Barcode scanning
- No remote backend needed

### Infrastructure
- Expo Build System: App compilation
- Expo Go: Development testing
- EAS Build: Production builds

## Development Environment
### Prerequisites
- Node.js: JavaScript runtime
- Yarn: Package manager
- Expo CLI: Development tools
- Mobile device or emulator
- Expo Go app for testing

### Setup Instructions
1. Clone repository
2. Run `yarn install` to install dependencies
3. Run `npx expo start` to start development
4. Use Expo Go app to test on device
5. For production: `eas build -p android --profile preview`

## Dependencies
### Frontend Dependencies
- @react-navigation/native: ^6.1.6 (Navigation)
- @react-navigation/native-stack: ^6.9.12 (Screen stack)
- @rneui/base: ^4.0.0-rc.8 (UI components)
- @rneui/themed: ^4.0.0-rc.8 (Theming)
- expo-camera: ~16.0.10 (Barcode scanning)
- expo-sqlite: ~15.0.5 (Local storage)
- react-native-gesture-handler: ~2.20.2 (Touch handling)

### Core Features Dependencies
- expo-sqlite: Local rating storage
- expo-camera: Barcode scanning
- react-native-safe-area-context: Screen layout

## Database Schema
### Products Table
- id: INTEGER PRIMARY KEY
- barcode: TEXT
- name: TEXT
- brand: TEXT
- rating: INTEGER
- notes: TEXT
- created_at: DATETIME
- updated_at: DATETIME

## Key Functions
- Barcode Scanning
  - Camera initialization
  - Code recognition
  - Data extraction
- Rating Management
  - Add/Edit ratings
  - View history
  - Search products
- Data Operations
  - Local storage
  - Search/Filter
  - Basic validation

## Configuration
- app.json: Expo configuration
- App.tsx: Navigation/Theme setup
- eas.json: Build profiles
- tsconfig.json: TypeScript settings

## Build & Deployment
### Development
1. `npx expo start`: Dev server
2. Expo Go for testing
3. Hot reload enabled

### Production
1. Configure eas.json
2. Run build command
3. Generate APK/IPA
4. Submit to stores

## Technical Constraints
- Barcode scanner limitations
- Local storage capacity
- Offline-only operation
- Mobile camera quality
- Screen size adaptation

## Integration Points
- Camera: Barcode scanning
- SQLite: Rating storage
- Navigation: Screen flow
- Theme: UI adaptation

Last Updated: [Current Date] 