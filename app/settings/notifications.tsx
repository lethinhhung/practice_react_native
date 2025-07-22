import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Notifications = () => {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    productUpdates: true,
    securityAlerts: true,
    socialNotifications: true,
    soundEnabled: true,
    vibrationEnabled: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const NotificationToggleItem = ({ 
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
          Notifications
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* General Notifications */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            General
          </Text>
          <View className="bg-white">
            <NotificationToggleItem
              title="Push Notifications"
              subtitle="Receive notifications on this device"
              value={settings.pushNotifications}
              onToggle={() => toggleSetting('pushNotifications')}
            />
            <NotificationToggleItem
              title="Email Notifications"
              subtitle="Receive notifications via email"
              value={settings.emailNotifications}
              onToggle={() => toggleSetting('emailNotifications')}
            />
            <NotificationToggleItem
              title="SMS Notifications"
              subtitle="Receive important updates via SMS"
              value={settings.smsNotifications}
              onToggle={() => toggleSetting('smsNotifications')}
              isLast
            />
          </View>
        </View>

        {/* Content Preferences */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Content Preferences
          </Text>
          <View className="bg-white">
            <NotificationToggleItem
              title="Marketing Emails"
              subtitle="Receive promotional offers and updates"
              value={settings.marketingEmails}
              onToggle={() => toggleSetting('marketingEmails')}
            />
            <NotificationToggleItem
              title="Product Updates"
              subtitle="Get notified about new features and improvements"
              value={settings.productUpdates}
              onToggle={() => toggleSetting('productUpdates')}
            />
            <NotificationToggleItem
              title="Security Alerts"
              subtitle="Important security and account notifications"
              value={settings.securityAlerts}
              onToggle={() => toggleSetting('securityAlerts')}
            />
            <NotificationToggleItem
              title="Social Notifications"
              subtitle="Updates about your social activity"
              value={settings.socialNotifications}
              onToggle={() => toggleSetting('socialNotifications')}
              isLast
            />
          </View>
        </View>

        {/* Sound & Vibration */}
        <View className="mt-6 mb-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Sound & Vibration
          </Text>
          <View className="bg-white">
            <NotificationToggleItem
              title="Sound"
              subtitle="Play sound for notifications"
              value={settings.soundEnabled}
              onToggle={() => toggleSetting('soundEnabled')}
            />
            <NotificationToggleItem
              title="Vibration"
              subtitle="Vibrate for notifications"
              value={settings.vibrationEnabled}
              onToggle={() => toggleSetting('vibrationEnabled')}
              isLast
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-5 mb-8">
          <TouchableOpacity
            className="bg-gray-100 py-4 rounded-lg"
            onPress={() => {
              // Enable all notifications
              setSettings(prev => ({
                ...prev,
                pushNotifications: true,
                emailNotifications: true,
                productUpdates: true,
                securityAlerts: true,
                socialNotifications: true,
                soundEnabled: true,
                vibrationEnabled: true,
              }));
            }}
            activeOpacity={0.8}
          >
            <Text className="text-black-300 font-rubik-medium text-base text-center">
              Enable All Notifications
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;