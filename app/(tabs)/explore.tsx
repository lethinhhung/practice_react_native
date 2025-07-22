import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const explore = () => {
  const { isDark } = useTheme();

  return (
    <ThemeWrapper>
      <SafeAreaView className={`flex-1 p-5 ${isDark ? 'bg-dark-bg' : 'bg-white'}`}>
        <View className="flex-1 items-center justify-center">
          <Text className={`text-xl font-rubik-medium ${isDark ? 'text-dark-text' : 'text-black-300'}`}>
            Explore
          </Text>
          <Text className={`mt-2 ${isDark ? 'text-dark-textSecondary' : 'text-black-200'}`}>
            Coming soon...
          </Text>
        </View>
      </SafeAreaView>
    </ThemeWrapper>
  );
};

export default explore;
