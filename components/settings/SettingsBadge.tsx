import React from 'react';
import { View, Text } from 'react-native';

interface SettingsBadgeProps {
  count?: number;
  text?: string;
  variant?: 'primary' | 'danger' | 'success' | 'warning';
}

const SettingsBadge: React.FC<SettingsBadgeProps> = ({
  count,
  text,
  variant = 'primary',
}) => {
  if (!count && !text) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case 'danger':
        return 'bg-red-500';
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-primary-300';
    }
  };

  const displayValue = text || (count && count > 99 ? '99+' : count?.toString());

  return (
    <View className={`${getVariantStyles()} rounded-full px-2 py-1 min-w-6 h-6 items-center justify-center`}>
      <Text className="text-white text-xs font-rubik-medium">
        {displayValue}
      </Text>
    </View>
  );
};

export default SettingsBadge;