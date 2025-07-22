import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Theme } from "@/contexts/ThemeContext";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const profile = () => {
  const { theme, isDark, setTheme, toggleTheme } = useTheme();

  const themeOptions: { label: string; value: Theme }[] = [
    { label: "Light Mode", value: "light" },
    { label: "Dark Mode", value: "dark" },
    { label: "System Default", value: "system" },
  ];

  return (
    <ThemeWrapper>
      <SafeAreaView className={`flex-1 p-5 ${isDark ? 'bg-dark-bg' : 'bg-white'}`}>
        <View className="pb-3">
          <Text className={`text-2xl font-rubik-bold ${isDark ? 'text-dark-text' : 'text-black-300'}`}>
            Profile
          </Text>
        </View>

        <View className={`w-full h-0.5 ${isDark ? 'bg-dark-border' : 'bg-gray-200'} rounded-full mb-6`}></View>

        {/* Theme Settings Section */}
        <View className={`p-5 ${isDark ? 'bg-dark-card' : 'bg-white'} rounded-lg shadow-sm`}>
          <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-dark-text' : 'text-black-300'}`}>
            Theme Settings
          </Text>

          {/* Quick Toggle */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className={`text-base font-rubik ${isDark ? 'text-dark-textSecondary' : 'text-black-200'}`}>
              Dark Mode
            </Text>
            <Switch
              value={isDark && theme !== 'system'}
              onValueChange={toggleTheme}
              trackColor={{
                false: isDark ? '#404040' : '#E5E7EB',
                true: '#0061FF'
              }}
              thumbColor={isDark ? '#FFFFFF' : '#FFFFFF'}
              disabled={theme === 'system'}
            />
          </View>

          {/* Theme Options */}
          <Text className={`text-sm font-rubik-medium mb-3 ${isDark ? 'text-dark-textSecondary' : 'text-black-100'}`}>
            Theme Options
          </Text>
          
          {themeOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => setTheme(option.value)}
              className={`flex-row justify-between items-center p-3 rounded-lg mb-2 ${
                theme === option.value 
                  ? (isDark ? 'bg-primary-300/20' : 'bg-primary-100') 
                  : (isDark ? 'bg-dark-bg' : 'bg-gray-100')
              }`}
            >
              <Text className={`font-rubik ${
                theme === option.value 
                  ? 'text-primary-300 font-rubik-medium' 
                  : (isDark ? 'text-dark-text' : 'text-black-300')
              }`}>
                {option.label}
              </Text>
              
              {theme === option.value && (
                <View className="w-2 h-2 bg-primary-300 rounded-full" />
              )}
            </TouchableOpacity>
          ))}

          {/* Current Theme Info */}
          <View className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-border">
            <Text className={`text-xs font-rubik ${isDark ? 'text-dark-textSecondary' : 'text-black-100'}`}>
              Current: {theme === 'system' ? `System (${isDark ? 'Dark' : 'Light'})` : theme.charAt(0).toUpperCase() + theme.slice(1)}
            </Text>
          </View>
        </View>

        {/* Profile Info Section */}
        <View className={`mt-6 p-5 ${isDark ? 'bg-dark-card' : 'bg-white'} rounded-lg shadow-sm`}>
          <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-dark-text' : 'text-black-300'}`}>
            Profile Info
          </Text>
          
          <Text className={`text-base font-rubik ${isDark ? 'text-dark-textSecondary' : 'text-black-200'}`}>
            Welcome to your profile page! Dark mode is now available.
          </Text>
        </View>
      </SafeAreaView>
    </ThemeWrapper>
  );
};

export default profile;
