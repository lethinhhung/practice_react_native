import { View, Text, TouchableOpacity, Switch, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Theme } from "@/contexts/ThemeContext";
import icons from "@/constants/icons";

const Profile = () => {
  const { theme, isDark, setTheme, toggleTheme } = useTheme();

  const themeOptions: { label: string; value: Theme }[] = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ];

  const renderThemeOption = (option: { label: string; value: Theme }) => (
    <TouchableOpacity
      key={option.value}
      className={`flex-row items-center justify-between p-4 rounded-lg mb-3 ${
        isDark ? 'bg-dark-card' : 'bg-white'
      } ${theme === option.value ? (isDark ? 'border-2 border-primary-300' : 'border-2 border-primary-300') : ''}`}
      onPress={() => setTheme(option.value)}
    >
      <View className="flex-row items-center">
        <View className={`w-6 h-6 rounded-full mr-3 ${
          option.value === 'light' ? 'bg-yellow-400' : 
          option.value === 'dark' ? 'bg-gray-800' : 
          'bg-primary-300'
        }`}>
          {option.value === 'light' && (
            <Text className="text-center text-xs leading-6">☀️</Text>
          )}
          {option.value === 'dark' && (
            <Text className="text-center text-xs leading-6">🌙</Text>
          )}
          {option.value === 'system' && (
            <Text className="text-center text-xs leading-6">⚙️</Text>
          )}
        </View>
        <Text className={`text-base font-rubik-medium ${isDark ? 'text-white' : 'text-black-300'}`}>
          {option.label}
        </Text>
      </View>
      <View className={`w-5 h-5 rounded-full border-2 ${
        theme === option.value 
          ? 'bg-primary-300 border-primary-300' 
          : isDark ? 'border-gray-400' : 'border-gray-300'
      }`}>
        {theme === option.value && (
          <View className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <View className="w-2 h-2 rounded-full bg-primary-300" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className={`p-5 h-full ${isDark ? 'bg-dark' : 'bg-white'}`}>
      <View className="pb-3 mb-5">
        <Text className={`text-xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>
          Profile & Settings
        </Text>
      </View>

      <View className={`w-full h-0.5 rounded-full mb-8 ${isDark ? 'bg-dark-border' : 'bg-gray-200'}`}></View>

      {/* Profile Section */}
      <View className={`flex-row items-center p-5 rounded-lg mb-8 ${isDark ? 'bg-dark-card' : 'bg-white'}`}>
        <View className="w-16 h-16 rounded-full bg-primary-300 items-center justify-center mr-4">
          <Text className="text-white text-xl font-rubik-bold">U</Text>
        </View>
        <View className="flex-1">
          <Text className={`text-lg font-rubik-semibold ${isDark ? 'text-white' : 'text-black-300'}`}>
            User Name
          </Text>
          <Text className={`text-sm font-rubik ${isDark ? 'text-gray-400' : 'text-black-100'}`}>
            user@example.com
          </Text>
        </View>
      </View>

      {/* Theme Settings */}
      <View className="mb-8">
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-white' : 'text-black-300'}`}>
          Theme Settings
        </Text>
        
        {/* Quick Toggle */}
        <View className={`flex-row items-center justify-between p-4 rounded-lg mb-4 ${isDark ? 'bg-dark-card' : 'bg-white'}`}>
          <View className="flex-row items-center">
            <Text className="text-2xl mr-3">{isDark ? '🌙' : '☀️'}</Text>
            <Text className={`text-base font-rubik-medium ${isDark ? 'text-white' : 'text-black-300'}`}>
              Dark Mode
            </Text>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#E5E7EB", true: "#0061FF" }}
            thumbColor={isDark ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>

        {/* Theme Options */}
        <Text className={`text-base font-rubik-medium mb-3 ${isDark ? 'text-gray-300' : 'text-black-200'}`}>
          Theme Options:
        </Text>
        {themeOptions.map(renderThemeOption)}
      </View>

      {/* Current Status */}
      <View className={`p-4 rounded-lg ${isDark ? 'bg-dark-100' : 'bg-gray-50'}`}>
        <Text className={`text-sm font-rubik ${isDark ? 'text-gray-300' : 'text-black-200'}`}>
          Current theme: <Text className="font-rubik-semibold capitalize">{theme}</Text>
        </Text>
        <Text className={`text-sm font-rubik ${isDark ? 'text-gray-300' : 'text-black-200'}`}>
          Display: <Text className="font-rubik-semibold">{isDark ? 'Dark' : 'Light'}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
