import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";

const Profile = () => {
  const { theme, isDarkMode, toggleTheme, setTheme } = useTheme();

  const handleThemeChange = (value: string) => {
    setTheme(value as 'light' | 'dark' | 'system');
  };

  return (
    <SafeAreaView className={`flex-1 p-5 ${isDarkMode ? 'bg-dark-100' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDarkMode ? 'text-white' : 'text-black-300'}`}>
          Profile Settings
        </Text>
      </View>

      <View className={`w-full h-0.5 ${isDarkMode ? 'bg-dark-300' : 'bg-gray-200'} rounded-full mb-6`}></View>

      <View className="space-y-4">
        {/* Theme Section */}
        <View className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
          <Text className={`text-lg font-rubik-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black-300'}`}>
            Appearance
          </Text>
          
          {/* Quick Toggle */}
          <View className="flex-row items-center justify-between mb-4">
            <Text className={`text-base font-rubik ${isDarkMode ? 'text-gray-300' : 'text-black-200'}`}>
              Dark Mode
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#E5E7EB', true: '#0061FF' }}
              thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
            />
          </View>

          {/* Theme Options */}
          <Text className={`text-sm font-rubik-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-black-100'}`}>
            Theme Options:
          </Text>
          
          {['light', 'dark', 'system'].map((themeOption) => (
            <TouchableOpacity
              key={themeOption}
              onPress={() => handleThemeChange(themeOption)}
              className={`flex-row items-center py-3 px-3 rounded-lg mb-2 ${
                theme === themeOption 
                  ? (isDarkMode ? 'bg-primary-200' : 'bg-primary-100')
                  : (isDarkMode ? 'bg-dark-300' : 'bg-white')
              }`}
            >
              <View className={`w-4 h-4 rounded-full mr-3 border-2 ${
                theme === themeOption
                  ? 'bg-primary-300 border-primary-300'
                  : (isDarkMode ? 'border-gray-500' : 'border-gray-300')
              }`} />
              <Text className={`text-base font-rubik ${
                theme === themeOption 
                  ? 'text-primary-300 font-rubik-medium'
                  : (isDarkMode ? 'text-white' : 'text-black-300')
              }`}>
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}

          <Text className={`text-xs font-rubik mt-2 ${isDarkMode ? 'text-gray-500' : 'text-black-100'}`}>
            System theme follows your device's appearance settings
          </Text>
        </View>

        {/* Current Theme Status */}
        <View className={`p-4 rounded-lg ${isDarkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
          <Text className={`text-sm font-rubik-medium ${isDarkMode ? 'text-gray-400' : 'text-black-100'}`}>
            Current Theme:
          </Text>
          <Text className={`text-lg font-rubik-semibold ${isDarkMode ? 'text-white' : 'text-black-300'}`}>
            {theme === 'system' ? `System (${isDarkMode ? 'Dark' : 'Light'})` : theme}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
