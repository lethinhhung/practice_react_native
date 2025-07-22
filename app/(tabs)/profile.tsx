import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";

const Profile = () => {
  const { isDarkMode, theme, setTheme, toggleTheme } = useTheme();

  const themeOptions = [
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' },
    { value: 'system', label: 'System Default' },
  ];

  return (
    <SafeAreaView className={`p-5 h-full ${isDarkMode ? 'bg-dark-primary' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDarkMode ? 'text-dark-text-primary' : 'text-black-300'}`}>
          Profile
        </Text>
      </View>

      <View className={`w-full h-0.5 ${isDarkMode ? 'bg-dark-border' : 'bg-gray-200'} rounded-full mb-6`}></View>

      {/* Theme Settings Section */}
      <View className={`p-5 rounded-lg mb-4 ${isDarkMode ? 'bg-dark-secondary' : 'bg-white'} shadow-sm`}>
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDarkMode ? 'text-dark-text-primary' : 'text-black-300'}`}>
          Theme Settings
        </Text>

        {/* Quick Dark Mode Toggle */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className={`text-base font-rubik ${isDarkMode ? 'text-dark-text-secondary' : 'text-black-200'}`}>
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#E5E5E5', true: '#0061FF' }}
            thumbColor={isDarkMode ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>

        {/* Theme Options */}
        <Text className={`text-sm font-rubik-medium mb-3 ${isDarkMode ? 'text-dark-text-secondary' : 'text-black-200'}`}>
          Theme Options
        </Text>
        
        {themeOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => setTheme(option.value as 'light' | 'dark' | 'system')}
            className={`flex-row items-center py-3 px-3 mb-2 rounded-md ${
              theme === option.value 
                ? isDarkMode ? 'bg-dark-tertiary' : 'bg-primary-100'
                : ''
            }`}
          >
            <View className={`w-4 h-4 rounded-full border-2 mr-3 ${
              theme === option.value 
                ? 'bg-primary-300 border-primary-300' 
                : isDarkMode ? 'border-dark-text-tertiary' : 'border-gray-400'
            }`}>
              {theme === option.value && (
                <View className="w-2 h-2 bg-white rounded-full m-auto" />
              )}
            </View>
            <Text className={`text-base font-rubik ${
              theme === option.value
                ? 'text-primary-300 font-rubik-medium'
                : isDarkMode ? 'text-dark-text-secondary' : 'text-black-200'
            }`}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Current Status */}
        <View className={`mt-4 p-3 rounded-md ${isDarkMode ? 'bg-dark-tertiary' : 'bg-gray-100'}`}>
          <Text className={`text-xs font-rubik ${isDarkMode ? 'text-dark-text-tertiary' : 'text-black-100'}`}>
            Current: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>
          <Text className={`text-xs font-rubik ${isDarkMode ? 'text-dark-text-tertiary' : 'text-black-100'}`}>
            Setting: {theme === 'system' ? 'Following System' : theme === 'dark' ? 'Always Dark' : 'Always Light'}
          </Text>
        </View>
      </View>

      {/* User Settings Section */}
      <View className={`p-5 rounded-lg ${isDarkMode ? 'bg-dark-secondary' : 'bg-white'} shadow-sm`}>
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDarkMode ? 'text-dark-text-primary' : 'text-black-300'}`}>
          User Settings
        </Text>
        
        <Text className={`text-base font-rubik ${isDarkMode ? 'text-dark-text-secondary' : 'text-black-200'}`}>
          Additional user settings can be added here...
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
