import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";

const Explore = () => {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className={`flex-1 p-5 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDark ? 'text-dark-700' : 'text-black-300'}`}>
          Explore
        </Text>
      </View>

      <View className={`w-full h-0.5 rounded-full mb-6 ${isDark ? 'bg-dark-400' : 'bg-gray-200'}`}></View>

      <View className="flex-1 items-center justify-center">
        <Text className={`text-base font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
          Explore screen content goes here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
