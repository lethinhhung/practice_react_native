# React Native Settings Interface App

A clean and modern settings interface built with React Native, Expo (SDK 52), and NativeWind.

## Features

- ✨ Modern UI with Tailwind CSS styling
- 📱 Bottom tab navigation with dedicated Settings screen
- ⚙️ Comprehensive settings interface with multiple sections
- 🔧 Toggle switches for user preferences (notifications, location)
- 🎨 Custom fonts (Rubik family)
- 🔒 Account management including security and privacy settings
- 💰 Payment methods configuration
- 🌐 Language and localization settings
- ℹ️ App information and support sections
- 🎯 Clean and minimalist design
- 📊 Type-safe implementation with TypeScript
- 🧩 Reusable components architecture

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
│   │   ├── profile.tsx   # Settings interface screen
│   │   └── ...          # Other tab screens
│   ├── _layout.tsx       # Root layout configuration
│   └── globals.css       # Global styles
├── assets/               # Static assets (fonts, icons, images)
├── components/           # Reusable UI components
│   ├── SettingItem.tsx   # Individual setting item component
│   ├── SectionHeader.tsx # Section header component
│   └── index.ts          # Component exports
├── constants/            # Constant values and configurations
│   ├── icons.ts          # Icon exports
│   └── settingsData.ts   # Settings configuration data
├── types/                # TypeScript type definitions
│   └── settings.ts       # Settings-related types
└── tsconfig.json         # TypeScript configuration
```

## Settings Interface

The app includes a comprehensive settings interface with the following sections:

### 📱 Account Settings
- **Personal Information**: Manage name, email, and phone number
- **Security & Privacy**: Password, biometric settings, and privacy controls
- **Payment Methods**: Credit card and payment option management

### 🔧 Preferences
- **Push Notifications**: Toggle notifications on/off with live status
- **Language**: Language selection (currently English)
- **Location Services**: Toggle location permissions with live status

### 📱 App Settings
- **About**: App version and information
- **Rate App**: Feedback and rating functionality
- **Help & Support**: FAQ and contact support
- **Share App**: Invite friends functionality

### 🚨 Account Management
- **Sign Out**: Safe logout with confirmation

## Key Features

### Component Architecture
- **Reusable Components**: Modular `SettingItem` and `SectionHeader` components
- **Type Safety**: Full TypeScript integration with custom types
- **Data-Driven**: Settings configuration separated from UI logic

### Interactive Elements
- **Toggle Switches**: Real-time preference updates
- **Touch Feedback**: Proper touch handling for all interactive elements
- **Visual States**: Different visual states for navigation, toggle, and danger actions

### Design System
- **Consistent Styling**: Uniform spacing, colors, and typography
- **Custom Icons**: Tailored iconography for each setting type
- **Brand Colors**: Consistent use of primary brand colors throughout```

## Styling

The project uses NativeWind (Tailwind CSS) for styling. Custom theme configuration includes:

- Custom font families (Rubik variants)
- Custom colors
- Responsive design utilities

