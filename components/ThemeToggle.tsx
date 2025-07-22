import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { themeMode, setThemeMode, isDark } = useTheme();

  const themeOptions = [
    { key: 'light', label: 'Light', icon: '☀️' },
    { key: 'dark', label: 'Dark', icon: '🌙' },
    { key: 'system', label: 'System', icon: '💻' },
  ] as const;

  return (
    <View className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg mx-4 my-2`}>
      <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-white' : 'text-black-300'}`}>
        Theme
      </Text>
      
      <View className="flex-row justify-between">
        {themeOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            onPress={() => setThemeMode(option.key)}
            className={`flex-1 p-3 mx-1 rounded-lg items-center ${
              themeMode === option.key
                ? 'bg-primary-300'
                : isDark
                ? 'bg-dark-400'
                : 'bg-gray-100'
            }`}
          >
            <Text className="text-2xl mb-1">{option.icon}</Text>
            <Text
              className={`text-sm font-rubik ${
                themeMode === option.key
                  ? 'text-white'
                  : isDark
                  ? 'text-white-200'
                  : 'text-black-200'
              }`}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <Text className={`text-sm mt-2 ${isDark ? 'text-white-200' : 'text-black-100'}`}>
        Current: {themeMode === 'system' ? `System (${isDark ? 'Dark' : 'Light'})` : themeMode}
      </Text>
    </View>
  );
};