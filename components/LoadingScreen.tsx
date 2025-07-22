import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoadingScreenProps {
  message?: string;
  isDark?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Loading...", 
  isDark = false 
}) => {
  return (
    <SafeAreaView className={`flex-1 items-center justify-center ${
      isDark ? 'bg-dark-100' : 'bg-white'
    }`}>
      <ActivityIndicator 
        size="large" 
        color={isDark ? "#4A90E2" : "#0061FF"} 
        className="mb-4"
      />
      <Text className={`text-base font-rubik ${
        isDark ? 'text-dark-600' : 'text-black-200'
      }`}>
        {message}
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;