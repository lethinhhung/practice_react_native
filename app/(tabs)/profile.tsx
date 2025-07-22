import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

const Profile = () => {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className={`text-2xl font-rubik-bold mb-6 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Profile
          </Text>
          
          {/* User Profile Section */}
          <View className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg mb-4 shadow-sm`}>
            <View className="items-center mb-4">
              <View className={`w-20 h-20 rounded-full ${isDark ? 'bg-dark-400' : 'bg-gray-200'} items-center justify-center mb-3`}>
                <Text className={`text-2xl ${isDark ? 'text-white' : 'text-black-300'}`}>👤</Text>
              </View>
              <Text className={`text-lg font-rubik-semibold ${isDark ? 'text-white' : 'text-black-300'}`}>
                User Name
              </Text>
              <Text className={`text-sm ${isDark ? 'text-white-200' : 'text-black-200'}`}>
                user@example.com
              </Text>
            </View>
          </View>

          {/* Settings Section */}
          <Text className={`text-lg font-rubik-semibold mb-3 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Settings
          </Text>
          
          <ThemeToggle />

          {/* Additional Settings */}
          <View className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg mx-4 my-2`}>
            <Text className={`text-base font-rubik ${isDark ? 'text-white' : 'text-black-300'}`}>
              Notifications
            </Text>
            <Text className={`text-sm mt-1 ${isDark ? 'text-white-200' : 'text-black-200'}`}>
              Manage your notification preferences
            </Text>
          </View>

          <View className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg mx-4 my-2`}>
            <Text className={`text-base font-rubik ${isDark ? 'text-white' : 'text-black-300'}`}>
              Privacy
            </Text>
            <Text className={`text-sm mt-1 ${isDark ? 'text-white-200' : 'text-black-200'}`}>
              Control your privacy settings
            </Text>
          </View>

          <View className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg mx-4 my-2`}>
            <Text className={`text-base font-rubik ${isDark ? 'text-white' : 'text-black-300'}`}>
              About
            </Text>
            <Text className={`text-sm mt-1 ${isDark ? 'text-white-200' : 'text-black-200'}`}>
              App version and information
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
