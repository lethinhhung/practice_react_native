import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Privacy = () => {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    activityTracking: false,
    dataCollection: true,
    locationSharing: false,
    analyticsOptIn: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const PrivacyToggleItem = ({ 
    title, 
    subtitle, 
    value, 
    onToggle,
    isLast = false 
  }: {
    title: string;
    subtitle: string;
    value: boolean;
    onToggle: () => void;
    isLast?: boolean;
  }) => (
    <View className={`px-5 py-4 bg-white ${!isLast ? 'border-b border-black-25' : ''}`}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1 mr-4">
          <Text className="text-black-300 text-base font-rubik-medium">
            {title}
          </Text>
          <Text className="text-black-200 text-sm font-rubik mt-1">
            {subtitle}
          </Text>
        </View>
        <Switch
          value={value}
          onValueChange={onToggle}
          trackColor={{ false: '#e5e5e5', true: '#0061ff' }}
          thumbColor={value ? '#ffffff' : '#ffffff'}
          ios_backgroundColor="#e5e5e5"
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-black-25">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-4"
        >
          <Image
            source={icons.backArrow}
            className="w-6 h-6"
            resizeMode="contain"
            tintColor="#666876"
          />
        </TouchableOpacity>
        <Text className="text-xl font-rubik-bold text-black-300">
          Privacy & Security
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Privacy */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Profile Privacy
          </Text>
          <View className="bg-white">
            <PrivacyToggleItem
              title="Public Profile"
              subtitle="Allow others to see your profile information"
              value={settings.profileVisibility}
              onToggle={() => toggleSetting('profileVisibility')}
              isLast
            />
          </View>
        </View>

        {/* Data & Analytics */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Data & Analytics
          </Text>
          <View className="bg-white">
            <PrivacyToggleItem
              title="Activity Tracking"
              subtitle="Track your app usage for personalized experience"
              value={settings.activityTracking}
              onToggle={() => toggleSetting('activityTracking')}
            />
            <PrivacyToggleItem
              title="Data Collection"
              subtitle="Allow collection of usage data for improvements"
              value={settings.dataCollection}
              onToggle={() => toggleSetting('dataCollection')}
            />
            <PrivacyToggleItem
              title="Analytics Opt-in"
              subtitle="Help improve the app by sharing usage analytics"
              value={settings.analyticsOptIn}
              onToggle={() => toggleSetting('analyticsOptIn')}
              isLast
            />
          </View>
        </View>

        {/* Location Services */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Location Services
          </Text>
          <View className="bg-white">
            <PrivacyToggleItem
              title="Location Sharing"
              subtitle="Share your location for location-based features"
              value={settings.locationSharing}
              onToggle={() => toggleSetting('locationSharing')}
              isLast
            />
          </View>
        </View>

        {/* Additional Options */}
        <View className="mt-6 mb-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Additional Options
          </Text>
          <View className="bg-white">
            <TouchableOpacity
              className="px-5 py-4 bg-white border-b border-black-25"
              onPress={() => {/* Handle clear data */}}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                Clear Browsing Data
              </Text>
              <Text className="text-black-200 text-sm font-rubik mt-1">
                Remove cached data and temporary files
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-5 py-4 bg-white"
              onPress={() => {/* Handle download data */}}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                Download My Data
              </Text>
              <Text className="text-black-200 text-sm font-rubik mt-1">
                Request a copy of your personal data
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;