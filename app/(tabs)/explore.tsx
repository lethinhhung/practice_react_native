import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";

const Explore = () => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView className={`flex-1 p-5 ${isDarkMode ? 'bg-dark-100' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDarkMode ? 'text-white' : 'text-black-300'}`}>
          Explore
        </Text>
      </View>

      <View className={`w-full h-0.5 ${isDarkMode ? 'bg-dark-300' : 'bg-gray-200'} rounded-full mb-6`}></View>

      <View className="flex-1 items-center justify-center">
        <View className={`p-8 rounded-lg ${isDarkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
          <Text className={`text-lg font-rubik-medium text-center ${isDarkMode ? 'text-white' : 'text-black-300'}`}>
            Explore Feature
          </Text>
          <Text className={`text-base font-rubik text-center mt-2 ${isDarkMode ? 'text-gray-300' : 'text-black-200'}`}>
            Coming soon! This section will contain search and discovery features.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
