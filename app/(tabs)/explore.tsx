import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";

const Explore = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className={`text-2xl font-rubik-bold mb-6 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Explore
          </Text>
          
          {/* Search Bar */}
          <View className="mb-6">
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search todos..."
              placeholderTextColor={isDark ? '#8C8E98' : '#666876'}
              className={`p-4 rounded-lg ${isDark ? 'bg-dark-300 text-white' : 'bg-gray-100 text-black-300'}`}
            />
          </View>

          {/* Categories */}
          <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Categories
          </Text>
          
          <View className="flex-row flex-wrap gap-2 mb-6">
            {['Work', 'Personal', 'Shopping', 'Health'].map((category) => (
              <View
                key={category}
                className={`px-4 py-2 rounded-full ${isDark ? 'bg-dark-300' : 'bg-gray-100'}`}
              >
                <Text className={`font-rubik ${isDark ? 'text-white-200' : 'text-black-200'}`}>
                  {category}
                </Text>
              </View>
            ))}
          </View>

          {/* Recent Activity */}
          <Text className={`text-lg font-rubik-semibold mb-4 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Recent Activity
          </Text>
          
          <View className="space-y-3">
            {[
              { action: 'Completed', item: 'Buy groceries', time: '2 hours ago' },
              { action: 'Added', item: 'Call dentist', time: '5 hours ago' },
              { action: 'Updated', item: 'Finish project', time: '1 day ago' },
            ].map((activity, index) => (
              <View
                key={index}
                className={`p-4 rounded-lg ${isDark ? 'bg-dark-300' : 'bg-white'} border ${isDark ? 'border-dark-400' : 'border-gray-200'}`}
              >
                <View className="flex-row justify-between items-start">
                  <View className="flex-1">
                    <Text className={`font-rubik-medium ${isDark ? 'text-white' : 'text-black-300'}`}>
                      {activity.action}: {activity.item}
                    </Text>
                    <Text className={`text-sm mt-1 ${isDark ? 'text-white-200' : 'text-black-200'}`}>
                      {activity.time}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Statistics */}
          <Text className={`text-lg font-rubik-semibold mb-4 mt-6 ${isDark ? 'text-white' : 'text-black-300'}`}>
            Statistics
          </Text>
          
          <View className="flex-row gap-4">
            <View className={`flex-1 p-4 rounded-lg ${isDark ? 'bg-dark-300' : 'bg-white'} border ${isDark ? 'border-dark-400' : 'border-gray-200'}`}>
              <Text className={`text-2xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>
                0
              </Text>
              <Text className={`text-sm ${isDark ? 'text-white-200' : 'text-black-200'}`}>
                Total Todos
              </Text>
            </View>
            
            <View className={`flex-1 p-4 rounded-lg ${isDark ? 'bg-dark-300' : 'bg-white'} border ${isDark ? 'border-dark-400' : 'border-gray-200'}`}>
              <Text className={`text-2xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>
                0
              </Text>
              <Text className={`text-sm ${isDark ? 'text-white-200' : 'text-black-200'}`}>
                Completed
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
