import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ 
  children, 
  className = '' 
}) => {
  const { isDark } = useTheme();

  // Apply the theme class to enable Tailwind dark mode
  useEffect(() => {
    // In React Native, we use NativeWind's colorScheme approach
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  const themeClass = isDark ? 'dark' : '';
  const baseClass = isDark 
    ? 'bg-dark-100 flex-1' 
    : 'bg-white flex-1';

  return (
    <View 
      className={`${baseClass} ${themeClass} ${className}`}
      style={{ flex: 1 }}
    >
      {children}
    </View>
  );
};