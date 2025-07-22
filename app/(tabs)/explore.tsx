import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";

const Explore = () => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView className={`p-5 h-full ${isDarkMode ? 'bg-dark-primary' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDarkMode ? 'text-dark-text-primary' : 'text-black-300'}`}>
          Explore
        </Text>
      </View>

      <View className={`w-full h-0.5 ${isDarkMode ? 'bg-dark-border' : 'bg-gray-200'} rounded-full mb-6`}></View>

      <View className={`p-5 rounded-lg ${isDarkMode ? 'bg-dark-secondary' : 'bg-white'} shadow-sm`}>
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDarkMode ? 'text-dark-text-primary' : 'text-black-300'}`}>
          Coming Soon
        </Text>
        
        <Text className={`text-base font-rubik ${isDarkMode ? 'text-dark-text-secondary' : 'text-black-200'}`}>
          Explore features will be available here. The dark mode theme is fully working across all screens!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
