import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeToggle, SimpleThemeToggle } from "../../components/ThemeToggle";

const Profile = () => {
  const { isDark, theme } = useTheme();

  return (
    <SafeAreaView className={`flex-1 p-5 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDark ? 'text-dark-700' : 'text-black-300'}`}>
          Profile
        </Text>
      </View>

      <View className={`w-full h-0.5 rounded-full mb-6 ${isDark ? 'bg-dark-400' : 'bg-gray-200'}`}></View>

      {/* User Profile Section */}
      <View className={`p-5 rounded-lg mb-6 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <View className="flex-row items-center mb-4">
          <View className={`w-16 h-16 rounded-full items-center justify-center mr-4 ${
            isDark ? 'bg-primary-400' : 'bg-primary-300'
          }`}>
            <Text className="text-white text-xl font-rubik-bold">U</Text>
          </View>
          <View>
            <Text className={`text-lg font-rubik-semibold ${isDark ? 'text-dark-700' : 'text-black-300'}`}>
              User Name
            </Text>
            <Text className={`text-sm font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
              user@example.com
            </Text>
          </View>
        </View>
      </View>

      {/* Theme Settings Section */}
      <View className={`p-5 rounded-lg mb-6 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-dark-700' : 'text-black-300'}`}>
          Theme Settings
        </Text>
        
        <View className="mb-4">
          <Text className={`text-sm font-rubik mb-3 ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
            Current theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Text>
          <ThemeToggle showLabels={true} style="buttons" />
        </View>

        <View className={`border-t pt-4 mt-4 ${isDark ? 'border-dark-400' : 'border-gray-200'}`}>
          <View className="flex-row items-center justify-between">
            <Text className={`text-sm font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
              Quick toggle
            </Text>
            <SimpleThemeToggle />
          </View>
        </View>
      </View>

      {/* App Settings Section */}
      <View className={`p-5 rounded-lg ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-dark-700' : 'text-black-300'}`}>
          App Settings
        </Text>
        
        <View className="space-y-3">
          <View className="flex-row justify-between items-center py-2">
            <Text className={`font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
              Notifications
            </Text>
            <Text className={`font-rubik-medium ${isDark ? 'text-primary-400' : 'text-primary-300'}`}>
              Enabled
            </Text>
          </View>
          
          <View className="flex-row justify-between items-center py-2">
            <Text className={`font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
              Language
            </Text>
            <Text className={`font-rubik-medium ${isDark ? 'text-primary-400' : 'text-primary-300'}`}>
              English
            </Text>
          </View>
          
          <View className="flex-row justify-between items-center py-2">
            <Text className={`font-rubik ${isDark ? 'text-dark-600' : 'text-black-200'}`}>
              Version
            </Text>
            <Text className={`font-rubik-medium ${isDark ? 'text-dark-500' : 'text-black-100'}`}>
              1.0.0
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
