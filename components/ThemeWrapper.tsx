import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className = '' }) => {
  const { isDark } = useTheme();
  
  return (
    <View className={`${className} ${isDark ? 'dark' : ''}`} style={{ flex: 1 }}>
      {children}
    </View>
  );
};