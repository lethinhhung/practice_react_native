import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icons from "@/constants/icons";

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => (
  <View className="mb-6">
    <View className="bg-white rounded-lg overflow-hidden mx-5">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center py-4 px-5"
        activeOpacity={0.7}
      >
        <View className="w-10 h-10 items-center justify-center mr-4">
          <Image source={icons.logout} className="w-6 h-6" tintColor="#f75555" />
        </View>
        <Text className="text-base font-rubik-medium text-red-500 flex-1">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default LogoutButton;