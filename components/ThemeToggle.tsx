import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme, Theme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  showLabels?: boolean;
  style?: 'buttons' | 'switch';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  showLabels = true, 
  style = 'buttons' 
}) => {
  const { theme, setTheme, isDark } = useTheme();

  if (style === 'switch') {
    return (
      <View className="flex-row items-center justify-center space-x-4">
        {showLabels && (
          <Text className={`text-sm font-rubik ${
            isDark ? 'text-dark-600' : 'text-black-100'
          }`}>
            Light
          </Text>
        )}
        
        <TouchableOpacity
          onPress={() => setTheme(isDark ? 'light' : 'dark')}
          accessibilityRole="switch"
          accessibilityState={{ checked: isDark }}
          accessibilityLabel={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className={`w-12 h-6 rounded-full p-1 transition-all duration-200 ${
            isDark ? 'bg-primary-400' : 'bg-black-100'
          }`}
        >
          <View
            className={`w-4 h-4 rounded-full bg-white transition-all duration-200 shadow-sm ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </TouchableOpacity>
        
        {showLabels && (
          <Text className={`text-sm font-rubik ${
            isDark ? 'text-dark-600' : 'text-black-100'
          }`}>
            Dark
          </Text>
        )}
      </View>
    );
  }

  return (
    <View className="flex-row space-x-2">
      {(['light', 'dark', 'system'] as Theme[]).map((themeOption) => (
        <TouchableOpacity
          key={themeOption}
          onPress={() => setTheme(themeOption)}
          accessibilityRole="button"
          accessibilityState={{ selected: theme === themeOption }}
          accessibilityLabel={`Switch to ${themeOption} theme`}
          className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
            theme === themeOption
              ? isDark
                ? 'bg-primary-400 border-primary-400'
                : 'bg-primary-300 border-primary-300'
              : isDark
                ? 'bg-dark-200 border-dark-400'
                : 'bg-white border-gray-300'
          }`}
        >
          <Text
            className={`text-sm font-rubik-medium capitalize ${
              theme === themeOption
                ? 'text-white'
                : isDark
                  ? 'text-dark-700'
                  : 'text-black-300'
            }`}
          >
            {themeOption}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Simple toggle button for quick switching between light/dark
export const SimpleThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      accessibilityRole="button"
      accessibilityLabel={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      accessibilityHint="Double tap to toggle between light and dark theme"
      className={`w-12 h-12 rounded-full items-center justify-center transition-all duration-200 shadow-sm ${
        isDark ? 'bg-dark-200' : 'bg-gray-100'
      }`}
    >
      <Text className="text-lg" accessibilityLabel={isDark ? 'Moon icon' : 'Sun icon'}>
        {isDark ? '🌙' : '☀️'}
      </Text>
    </TouchableOpacity>
  );
};