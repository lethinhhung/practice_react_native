import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeStatusBar: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <StatusBar 
      backgroundColor={isDark ? "#1A1A1A" : "white"}
      barStyle={isDark ? "light-content" : "dark-content"}
      translucent={false}
    />
  );
};