# React Native Todo App

A simple yet elegant todo application built with React Native, Expo (SDK 52), and NativeWind featuring a comprehensive settings screen.

## Features

- ✨ Modern UI with Tailwind CSS styling
- 📱 Bottom tab navigation with Home, Explore, and Settings
- 🎨 Custom fonts (Rubik family)
- ✅ Todo management functionality
- ⚙️ **Comprehensive Settings Screen** with:
  - User profile management with editable avatar
  - Account settings (information, payments, subscription)
  - Preferences (notifications, language, location services)
  - Privacy & security settings
  - Support options (help center, about, contact)
  - Logout functionality with confirmation
- 🔔 Interactive elements with badges and switches
- 📱 Haptic feedback for better UX
- 🎯 Clean and minimalist design

## Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on your preferred platform:
- Press `a` for Android
- Press `i` for iOS
- Press `w` for web

## Project Structure

```
├── app/                   # Main application code
│   ├── (tabs)/           # Tab-based navigation screens
│   │   ├── index.tsx     # Todo home screen
│   │   ├── explore.tsx   # Explore screen
│   │   └── profile.tsx   # Settings/Profile screen
│   ├── _layout.tsx       # Root layout configuration
│   └── globals.css       # Global styles
├── assets/               # Static assets (fonts, icons, images)
├── components/           # Reusable components
│   └── settings/         # Settings screen components
│       ├── SettingsAlert.tsx
│       ├── SettingsBadge.tsx
│       ├── SettingsHeader.tsx
│       ├── SettingsMenuItem.tsx
│       ├── SettingsSection.tsx
│       ├── UserProfileCard.tsx
│       ├── LogoutButton.tsx
│       └── index.ts
├── constants/            # Constant values and configurations
└── tsconfig.json        # TypeScript configuration
```

## Settings Screen Components

The settings screen is built with a modular component architecture:

- **SettingsHeader**: Reusable header with optional back button
- **UserProfileCard**: Profile section with avatar, name, email, and edit functionality
- **SettingsSection**: Organized sections with titles
- **SettingsMenuItem**: Individual setting items with icons, descriptions, and optional right components
- **SettingsBadge**: Notification badges and status indicators
- **SettingsAlert**: Custom modal for confirmations (logout, etc.)
- **LogoutButton**: Dedicated logout component with confirmation flow

All components support:
- TypeScript interfaces for type safety
- Haptic feedback on interactions
- Consistent styling with the app theme
- Flexible props for customization

## Styling

The project uses NativeWind (Tailwind CSS) for styling. Custom theme configuration includes:

- Custom font families (Rubik variants)
- Custom colors (primary, accent, black, danger, red)
- Responsive design utilities

