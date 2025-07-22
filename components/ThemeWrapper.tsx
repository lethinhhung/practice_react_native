import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className = '' }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <View className={`${isDarkMode ? 'dark' : ''} ${className}`}>
      {children}
    </View>
  );
};