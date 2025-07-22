import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  ];

  const LanguageItem = ({ 
    language, 
    isSelected, 
    onPress,
    isLast = false 
  }: {
    language: { code: string; name: string; nativeName: string };
    isSelected: boolean;
    onPress: () => void;
    isLast?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`px-5 py-4 bg-white ${!isLast ? 'border-b border-black-25' : ''}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-black-300 text-base font-rubik-medium">
            {language.name}
          </Text>
          <Text className="text-black-200 text-sm font-rubik mt-1">
            {language.nativeName}
          </Text>
        </View>
        {isSelected && (
          <View className="w-6 h-6 bg-primary-300 rounded-full items-center justify-center">
            <Text className="text-white text-xs">✓</Text>
          </View>
        )}
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
          Language
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Info Section */}
        <View className="px-5 py-4 bg-blue-50 border-b-8 border-black-25">
          <Text className="text-black-300 text-sm font-rubik">
            Changing the language will affect all text in the app. You may need to restart the app for all changes to take effect.
          </Text>
        </View>

        {/* Language List */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Available Languages
          </Text>
          <View className="bg-white">
            {languages.map((language, index) => (
              <LanguageItem
                key={language.code}
                language={language}
                isSelected={selectedLanguage === language.code}
                onPress={() => setSelectedLanguage(language.code)}
                isLast={index === languages.length - 1}
              />
            ))}
          </View>
        </View>

        {/* Additional Settings */}
        <View className="mt-6 mb-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Regional Settings
          </Text>
          <View className="bg-white">
            <TouchableOpacity
              className="px-5 py-4 bg-white border-b border-black-25 flex-row items-center justify-between"
              onPress={() => {/* Handle region settings */}}
            >
              <View className="flex-1">
                <Text className="text-black-300 text-base font-rubik-medium">
                  Region
                </Text>
                <Text className="text-black-200 text-sm font-rubik mt-1">
                  United States
                </Text>
              </View>
              <Image
                source={icons.rightArrow}
                className="w-4 h-4"
                resizeMode="contain"
                tintColor="#666876"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="px-5 py-4 bg-white flex-row items-center justify-between"
              onPress={() => {/* Handle calendar settings */}}
            >
              <View className="flex-1">
                <Text className="text-black-300 text-base font-rubik-medium">
                  Calendar Format
                </Text>
                <Text className="text-black-200 text-sm font-rubik mt-1">
                  Gregorian Calendar
                </Text>
              </View>
              <Image
                source={icons.rightArrow}
                className="w-4 h-4"
                resizeMode="contain"
                tintColor="#666876"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Apply Changes Button */}
      <View className="px-5 py-4 border-t border-black-25">
        <TouchableOpacity
          className="bg-primary-300 py-4 rounded-lg"
          onPress={() => {
            // Apply language change
            console.log('Applying language:', selectedLanguage);
            router.back();
          }}
          activeOpacity={0.8}
        >
          <Text className="text-white font-rubik-medium text-base text-center">
            Apply Changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Language;