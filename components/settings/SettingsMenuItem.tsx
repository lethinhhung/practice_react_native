import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Haptics from 'expo-haptics';
import icons from "@/constants/icons";

interface SettingsMenuItemProps {
  icon: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
  rightComponent?: React.ReactNode;
}

const SettingsMenuItem: React.FC<SettingsMenuItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  showArrow = true,
  rightComponent,
}) => {
  const handlePress = () => {
    if (onPress) {
      Haptics.selectionAsync();
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center py-4 px-5 bg-white mb-1"
      activeOpacity={0.7}
    >
    <View className="w-10 h-10 items-center justify-center mr-4">
      <Image source={icon} className="w-6 h-6" tintColor="#666876" />
    </View>
    <View className="flex-1">
      <Text className="text-base font-rubik-medium text-black-300">{title}</Text>
      {subtitle && (
        <Text className="text-sm font-rubik text-black-200 mt-1">{subtitle}</Text>
      )}
    </View>
    {rightComponent}
    {showArrow && !rightComponent && (
      <Image source={icons.rightArrow} className="w-5 h-5" tintColor="#666876" />
    )}
  </TouchableOpacity>
  );
};

export default SettingsMenuItem;