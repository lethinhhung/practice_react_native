import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";

const Explore = () => {
  const { isDark } = useTheme();
  
  return (
    <SafeAreaView className={`p-5 h-full ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <View className="pb-3 mb-5">
        <Text className={`text-xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>
          Explore
        </Text>
      </View>

      <View className={`w-full h-0.5 rounded-full mb-8 ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`}></View>

      <View className="flex-1 items-center justify-center">
        <Text className={`text-base font-rubik ${isDark ? 'text-gray-400' : 'text-black-200'}`}>
          Explore functionality coming soon...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
