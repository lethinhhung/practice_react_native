import { useTheme } from '../contexts/ThemeContext';

export const useThemeStyles = () => {
  const { isDark, theme } = useTheme();

  const getBackgroundStyle = (level: 'primary' | 'secondary' | 'tertiary' = 'primary') => {
    const styles = {
      primary: isDark ? 'bg-dark-100' : 'bg-white',
      secondary: isDark ? 'bg-dark-200' : 'bg-gray-50', 
      tertiary: isDark ? 'bg-dark-300' : 'bg-gray-100',
    };
    return styles[level];
  };

  const getTextStyle = (level: 'primary' | 'secondary' | 'muted' = 'primary') => {
    const styles = {
      primary: isDark ? 'text-dark-700' : 'text-black-300',
      secondary: isDark ? 'text-dark-600' : 'text-black-200',
      muted: isDark ? 'text-dark-500' : 'text-black-100',
    };
    return styles[level];
  };

  const getBorderStyle = () => {
    return isDark ? 'border-dark-400' : 'border-gray-200';
  };

  const getInputStyle = () => {
    return isDark 
      ? 'bg-dark-300 text-dark-700 placeholder:text-dark-500'
      : 'bg-gray-200 text-black-300';
  };

  const getButtonStyle = (variant: 'primary' | 'secondary' = 'primary') => {
    const styles = {
      primary: isDark ? 'bg-primary-400' : 'bg-primary-300',
      secondary: isDark ? 'bg-dark-200 border-dark-400' : 'bg-white border-gray-300',
    };
    return styles[variant];
  };

  const getPlaceholderColor = () => {
    return isDark ? '#737373' : '#666876';
  };

  return {
    isDark,
    theme,
    getBackgroundStyle,
    getTextStyle,
    getBorderStyle,
    getInputStyle,
    getButtonStyle,
    getPlaceholderColor,
  };
};