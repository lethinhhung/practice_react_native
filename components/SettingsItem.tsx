import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import icons from '@/constants/icons';

interface SettingsItemProps {
  icon: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightIcon?: any;
  showRightArrow?: boolean;
  isLast?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  rightIcon,
  showRightArrow = true,
  isLast = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center px-5 py-4 bg-white ${
        !isLast ? 'border-b border-black-25' : ''
      }`}
      activeOpacity={0.7}
    >
      {/* Left Icon */}
      <View className="w-8 h-8 items-center justify-center mr-4">
        <Image
          source={icon}
          className="w-6 h-6"
          resizeMode="contain"
          tintColor="#666876"
        />
      </View>

      {/* Title and Subtitle */}
      <View className="flex-1">
        <Text className="text-black-300 text-base font-rubik-medium">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-black-200 text-sm font-rubik mt-1">
            {subtitle}
          </Text>
        )}
      </View>

      {/* Right Side */}
      <View className="flex-row items-center">
        {rightIcon && (
          <Image
            source={rightIcon}
            className="w-5 h-5 mr-2"
            resizeMode="contain"
            tintColor="#666876"
          />
        )}
        {showRightArrow && (
          <Image
            source={icons.rightArrow}
            className="w-4 h-4"
            resizeMode="contain"
            tintColor="#666876"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;