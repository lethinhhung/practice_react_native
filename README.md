# React Native Todo App

A simple yet elegant todo application built with React Native, Expo (SDK 52), and NativeWind.

## Features

- ✨ Modern UI with Tailwind CSS styling
- 📱 Bottom tab navigation
- 🎨 Custom fonts (Rubik family)
- ✅ Todo management functionality
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
│   ├── _layout.tsx       # Root layout configuration
│   └── globals.css       # Global styles
├── assets/               # Static assets (fonts, icons, images)
├── components/           # Reusable components
├── constants/            # Constant values and configurations
└── tsconfig.json        # TypeScript configuration
```

## Styling

The project uses NativeWind (Tailwind CSS) for styling. Custom theme configuration includes:

- Custom font families (Rubik variants)
- Custom colors
- Responsive design utilities

