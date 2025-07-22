# React Native Practice App

A modern React Native application with a comprehensive settings interface, built with Expo (SDK 52) and NativeWind.

## Features

- ✨ Modern UI with Tailwind CSS styling
- 📱 Bottom tab navigation with Home, Explore, and Settings
- 🎨 Custom fonts (Rubik family)
- ⚙️ Comprehensive settings interface with multiple screens
- 🔒 Privacy & security settings with toggle controls
- 🔔 Notification preferences management
- 🌐 Language selection with regional settings
- ❓ Help center with support options
- ℹ️ About screen with app information
- 📱 Responsive design and smooth navigation
- 🎯 Clean and accessible user interface

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
│   │   ├── index.tsx     # Home screen
│   │   ├── explore.tsx   # Explore screen
│   │   └── profile.tsx   # Settings/Profile screen
│   ├── settings/         # Individual settings screens
│   │   ├── privacy.tsx   # Privacy & security settings
│   │   ├── notifications.tsx # Notification preferences
│   │   ├── language.tsx  # Language selection
│   │   ├── help.tsx      # Help center
│   │   └── about.tsx     # App information
│   ├── _layout.tsx       # Root layout configuration
│   └── globals.css       # Global styles
├── assets/               # Static assets (fonts, icons, images)
├── components/           # Reusable components
│   ├── SettingsItem.tsx  # Settings menu item component
│   └── index.ts          # Component exports
├── constants/            # Constant values and configurations
└── tsconfig.json        # TypeScript configuration
```

## Settings Interface

The app features a comprehensive settings interface organized into the following sections:

### Account Settings
- **Privacy & Security**: Toggle controls for profile visibility, data collection, analytics, and location sharing
- **Notifications**: Manage push notifications, email notifications, and content preferences
- **Payment Methods**: Manage payment options (placeholder)

### Preferences
- **Language**: Select from 12 languages with native script display and regional settings
- **Location Services**: Manage location permissions (placeholder)
- **Data Usage**: Monitor data consumption (placeholder)

### Support
- **Help Center**: Searchable help articles, contact options, and FAQ
- **Contact Us**: Multiple support channels (chat, email, phone)
- **Rate App**: App Store rating functionality

### Legal & About
- **Terms of Service**: Legal terms and conditions (placeholder)
- **Privacy Policy**: Privacy policy information (placeholder)  
- **About**: App information, version details, and developer links

## Styling

The project uses NativeWind (Tailwind CSS) for styling. Custom theme configuration includes:

- Custom font families (Rubik variants)
- Custom colors with primary/accent/black variants
- Responsive design utilities
- Consistent spacing and border styling

