# React Native Todo App

A simple yet elegant todo application built with React Native, Expo (SDK 52), and NativeWind with **comprehensive dark mode support**.

## Features

- ✨ Modern UI with Tailwind CSS styling
- 🌓 **Complete dark mode implementation** with system preference detection
- 📱 Bottom tab navigation with theme-aware styling
- 🎨 Custom fonts (Rubik family)
- ✅ Todo management functionality
- ⚙️ Theme persistence using AsyncStorage
- 🎛️ Multiple theme options (Light, Dark, System)
- 🎯 Clean and minimalist design

## Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Theme preference persistence
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
│   └── ThemeToggle.tsx   # Dark mode toggle components
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme state management
├── hooks/                # Custom hooks
│   └── useThemeStyles.ts # Theme styling utilities
├── utils/                # Utility functions
│   └── themeUtils.ts     # Theme persistence utilities
├── constants/            # Constant values and configurations
└── tsconfig.json        # TypeScript configuration
```

## Dark Mode Implementation

The app features a comprehensive dark mode system with:

### 🎨 Theme System
- **Light Mode**: Clean, bright interface with primary colors
- **Dark Mode**: Dark backgrounds with high contrast text
- **System Mode**: Automatically follows device system preference

### 🔧 Technical Implementation
- **Theme Context**: Centralized theme state management with React Context
- **Persistence**: Theme preferences saved using AsyncStorage
- **Dynamic Styling**: All components respond to theme changes instantly
- **Status Bar**: Automatically adjusts to match the theme

### 🎛️ Theme Controls
- **Profile Screen**: Full theme settings with all three options
- **Quick Toggle**: Simple sun/moon button for fast switching
- **Styled Buttons**: Visual theme selector with active state indication

### 🎨 Design System
Custom Tailwind configuration with dark mode support:

```javascript
// Dark mode colors
dark: {
  100: "#1A1A1A", // Main dark background
  200: "#2D2D2D", // Secondary dark background (cards, modals)
  300: "#404040", // Tertiary dark background (inputs, borders)
  400: "#525252", // Dark border color
  500: "#737373", // Dark text secondary
  600: "#A3A3A3", // Dark text muted
  700: "#D4D4D4", // Dark text primary
}
```

### 🔨 Usage

Import the theme context in any component:
```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { isDark, theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <View className={`p-4 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <Text className={isDark ? 'text-dark-700' : 'text-black-300'}>
        Current theme: {theme}
      </Text>
    </View>
  );
};
```

## Styling

The project uses NativeWind (Tailwind CSS) for styling with dark mode support. Features include:

- Custom font families (Rubik variants)
- Dark mode color palette
- Automatic theme-aware styling
- Responsive design utilities

