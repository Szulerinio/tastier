# System Patterns

## Architecture Overview
Tastier follows a simple, focused architecture designed for personal food preference tracking. The application uses React Native with Expo for the mobile interface, SQLite for local storage of food ratings, and a stack-based navigation system for easy movement between screens. The app implements a theme system for comfortable use in various shopping environments.

## Design Patterns
### Frontend Patterns
- Stack Navigation: Simple flow from list to detail views
- Scanner Integration: Quick barcode scanning for product identification
- Rating Component: Consistent rating interface across screens
- Search Component: Fast product lookup by name or brand
- Theme Provider: Adaptable UI for shopping environments
- List/Detail Pattern: Efficient product information display

### Backend Patterns
- Local Database: SQLite for personal ratings storage
- CRUD Operations: Simple product rating management
- Barcode Handler: Scanner data processing and lookup
- Search Index: Quick product search implementation
- Offline Storage: All data kept locally
- Data Validation: Basic product info verification

## Component Relationships
- App.tsx: Root component and theme management
- Navigation: Stack-based screen management
  - HomeScreen: Entry point and quick actions
  - ItemListScreen: Product ratings list
  - ScannerScreen: Barcode scanning
  - ItemScreen: Product details and rating
  - EditItemScreen: Rating management
  - FiltersScreen: Search refinement

## Data Flow
1. User scans product or searches list
2. Scanner/Search triggers data lookup
3. Product found: Show existing rating
4. Product not found: Show add rating form
5. Rating saved to local database
6. UI updates to reflect changes

## Security Patterns
- Local-Only Storage: All data stays on device
- No Network Access: Complete offline operation
- Data Isolation: Personal ratings only
- Input Sanitization: Basic data cleaning
- No Sensitive Data: Ratings and notes only

## Performance Patterns
- Quick Scan: Fast barcode recognition
- Efficient Storage: Minimal data per rating
- Quick Search: Indexed product lookup
- Lazy Loading: On-demand screen loading
- Memory Management: Efficient list rendering

## Error Handling
- Scanner Errors: Retry and manual entry options
- Storage Errors: Data integrity checks
- Input Validation: Basic data verification
- Navigation Errors: Safe state management
- Graceful Fallbacks: Alternative flows

## Testing Patterns
- Scanner Testing: Various barcode scenarios
- Storage Testing: CRUD operation verification
- UI Testing: Core flow validation
- Theme Testing: Visual consistency checks
- Offline Testing: No-connection scenarios

## Deployment Patterns
- Expo Build: Standard build process
- Development: Expo Go for testing
- Production: App store distribution
- Updates: Over-the-air when available
- Release: Version management

## Monitoring & Logging
- Development Logging: Debug information
- Error Tracking: Basic error capture
- Performance Monitoring: Core metrics
- Usage Patterns: Basic analytics
- Debug Mode: Enhanced logging

## Known Technical Debt
- Basic error reporting
- Simple state management
- Limited automated testing
- Basic theme implementation
- Minimal data validation

Last Updated: [Current Date] 