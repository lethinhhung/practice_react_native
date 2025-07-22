import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';

interface SettingsHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
}) => (
  <View className="bg-white px-5 py-4 border-b border-gray-200">
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center flex-1">
        {showBackButton && (
          <TouchableOpacity
            onPress={onBackPress}
            className="mr-4 p-2 -ml-2"
            activeOpacity={0.7}
          >
            <Image source={icons.backArrow} className="w-6 h-6" tintColor="#191D31" />
          </TouchableOpacity>
        )}
        <Text className="text-2xl font-rubik-bold text-black-300">{title}</Text>
      </View>
      {rightComponent}
    </View>
  </View>
);

export default SettingsHeader;