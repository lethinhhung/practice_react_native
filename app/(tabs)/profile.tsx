import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useMemo } from "react";
import icons from "@/constants/icons";
import { SettingItem, SectionHeader } from "@/components";
import { mockUserProfile, getSettingsSections } from "@/constants/settingsData";

const profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const handleSettingPress = (settingId: string) => {
    console.log(`${settingId} pressed`);
    // Add navigation or modal logic here
    // You can use switch/case to handle different settings
    switch (settingId) {
      case 'logout':
        // Handle logout logic
        console.log('Logging out...');
        break;
      case 'personal-info':
        // Navigate to personal info screen
        break;
      default:
        break;
    }
  };

  const settingsSections = useMemo(
    () =>
      getSettingsSections(
        notificationsEnabled,
        locationEnabled,
        handleSettingPress,
        setNotificationsEnabled,
        setLocationEnabled
      ),
    [notificationsEnabled, locationEnabled]
  );

  return (
    <SafeAreaView className="flex-1 bg-accent-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="bg-white px-5 py-6 border-b border-gray-100">
          <View className="flex-row items-center">
            <View className="w-16 h-16 bg-primary-100 rounded-full items-center justify-center mr-4">
              <Image source={icons.person} className="w-8 h-8" tintColor="#0061FF" />
            </View>
            <View className="flex-1">
              <Text className="text-black-300 font-rubik-bold text-xl">
                {mockUserProfile.name}
              </Text>
              <Text className="text-black-200 font-rubik text-sm mt-1">
                {mockUserProfile.email}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleSettingPress('edit-profile')}>
              <Image source={icons.edit} className="w-5 h-5" tintColor="#0061FF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, index) => (
          <View key={index}>
            <SectionHeader title={section.title} />
            <View className={`bg-white ${index === settingsSections.length - 1 ? 'mb-8' : ''}`}>
              {section.items.map((item) => (
                <SettingItem key={item.id} item={item} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
