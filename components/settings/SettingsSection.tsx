import React from "react";
import { View, Text } from "react-native";

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  children,
}) => (
  <View className="mb-6">
    <Text className="text-sm font-rubik-medium text-black-200 px-5 mb-3 uppercase tracking-wider">
      {title}
    </Text>
    <View className="bg-white rounded-lg overflow-hidden mx-5">
      {children}
    </View>
  </View>
);

export default SettingsSection;