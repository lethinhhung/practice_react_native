import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const About = () => {
  const appInfo = {
    name: 'Practice App',
    version: '1.0.0',
    buildNumber: '1',
    lastUpdated: 'July 22, 2025',
  };

  const InfoItem = ({ 
    title, 
    value,
    isLast = false 
  }: {
    title: string;
    value: string;
    isLast?: boolean;
  }) => (
    <View className={`px-5 py-4 bg-white ${!isLast ? 'border-b border-black-25' : ''}`}>
      <View className="flex-row items-center justify-between">
        <Text className="text-black-300 text-base font-rubik-medium">
          {title}
        </Text>
        <Text className="text-black-200 text-base font-rubik">
          {value}
        </Text>
      </View>
    </View>
  );

  const ActionItem = ({ 
    title, 
    onPress,
    isLast = false 
  }: {
    title: string;
    onPress: () => void;
    isLast?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`px-5 py-4 bg-white ${!isLast ? 'border-b border-black-25' : ''}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-black-300 text-base font-rubik-medium">
          {title}
        </Text>
        <Image
          source={icons.rightArrow}
          className="w-4 h-4"
          resizeMode="contain"
          tintColor="#666876"
        />
      </View>
    </TouchableOpacity>
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
          About
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* App Icon and Name */}
        <View className="items-center py-8 border-b-8 border-black-25">
          <Image
            source={require('@/assets/images/icon.png')}
            className="w-24 h-24 rounded-2xl mb-4"
            resizeMode="contain"
          />
          <Text className="text-2xl font-rubik-bold text-black-300">
            {appInfo.name}
          </Text>
          <Text className="text-base font-rubik text-black-200 mt-2">
            Version {appInfo.version}
          </Text>
        </View>

        {/* App Information */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            App Information
          </Text>
          <View className="bg-white">
            <InfoItem title="Version" value={appInfo.version} />
            <InfoItem title="Build Number" value={appInfo.buildNumber} />
            <InfoItem title="Last Updated" value={appInfo.lastUpdated} isLast />
          </View>
        </View>

        {/* Links */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Links
          </Text>
          <View className="bg-white">
            <ActionItem
              title="What's New"
              onPress={() => console.log('Show changelog')}
            />
            <ActionItem
              title="Rate on App Store"
              onPress={() => console.log('Rate on App Store')}
            />
            <ActionItem
              title="Share App"
              onPress={() => console.log('Share app')}
            />
            <ActionItem
              title="Developer Website"
              onPress={() => console.log('Open developer website')}
              isLast
            />
          </View>
        </View>

        {/* Legal */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Legal
          </Text>
          <View className="bg-white">
            <ActionItem
              title="Terms of Service"
              onPress={() => console.log('Show terms')}
            />
            <ActionItem
              title="Privacy Policy"
              onPress={() => console.log('Show privacy policy')}
            />
            <ActionItem
              title="Open Source Licenses"
              onPress={() => console.log('Show licenses')}
              isLast
            />
          </View>
        </View>

        {/* Copyright */}
        <View className="px-5 py-8 items-center">
          <Text className="text-sm font-rubik text-black-200 text-center">
            © 2025 Practice App. All rights reserved.
          </Text>
          <Text className="text-xs font-rubik text-black-200 text-center mt-2">
            Built with React Native & Expo
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;