import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Help = () => {
  const helpTopics = [
    {
      id: '1',
      title: 'Getting Started',
      description: 'Learn the basics of using the app',
      icon: icons.info,
    },
    {
      id: '2',
      title: 'Account & Profile',
      description: 'Manage your account settings and profile',
      icon: icons.person,
    },
    {
      id: '3',
      title: 'Privacy & Security',
      description: 'Understand your privacy settings and security features',
      icon: icons.shield,
    },
    {
      id: '4',
      title: 'Notifications',
      description: 'Configure notification preferences',
      icon: icons.bell,
    },
    {
      id: '5',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: icons.info,
    },
  ];

  const contactOptions = [
    {
      id: '1',
      title: 'Chat Support',
      description: 'Get instant help from our support team',
      icon: icons.chat,
      action: () => console.log('Open chat support'),
    },
    {
      id: '2',
      title: 'Email Support',
      description: 'Send us an email for detailed assistance',
      icon: icons.send,
      action: () => console.log('Open email support'),
    },
    {
      id: '3',
      title: 'Call Support',
      description: 'Speak directly with our support team',
      icon: icons.phone,
      action: () => console.log('Call support'),
    },
  ];

  const HelpItem = ({ 
    item, 
    onPress,
    isLast = false 
  }: {
    item: { title: string; description: string; icon: any };
    onPress: () => void;
    isLast?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`px-5 py-4 bg-white ${!isLast ? 'border-b border-black-25' : ''}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center">
        <View className="w-10 h-10 bg-blue-50 rounded-lg items-center justify-center mr-4">
          <Image
            source={item.icon}
            className="w-6 h-6"
            resizeMode="contain"
            tintColor="#0061ff"
          />
        </View>
        <View className="flex-1">
          <Text className="text-black-300 text-base font-rubik-medium">
            {item.title}
          </Text>
          <Text className="text-black-200 text-sm font-rubik mt-1">
            {item.description}
          </Text>
        </View>
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
          Help Center
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="px-5 py-4 border-b-8 border-black-25">
          <View className="bg-gray-100 rounded-lg px-4 py-3 flex-row items-center">
            <Image
              source={icons.search}
              className="w-5 h-5 mr-3"
              resizeMode="contain"
              tintColor="#666876"
            />
            <Text className="flex-1 text-black-200 font-rubik">
              Search help articles...
            </Text>
          </View>
        </View>

        {/* Popular Topics */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Popular Topics
          </Text>
          <View className="bg-white">
            {helpTopics.map((topic, index) => (
              <HelpItem
                key={topic.id}
                item={topic}
                onPress={() => console.log(`Open help topic: ${topic.title}`)}
                isLast={index === helpTopics.length - 1}
              />
            ))}
          </View>
        </View>

        {/* Contact Support */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Contact Support
          </Text>
          <View className="bg-white">
            {contactOptions.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                onPress={option.action}
                className={`px-5 py-4 bg-white ${index !== contactOptions.length - 1 ? 'border-b border-black-25' : ''}`}
                activeOpacity={0.7}
              >
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-green-50 rounded-lg items-center justify-center mr-4">
                    <Image
                      source={option.icon}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#10B981"
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-black-300 text-base font-rubik-medium">
                      {option.title}
                    </Text>
                    <Text className="text-black-200 text-sm font-rubik mt-1">
                      {option.description}
                    </Text>
                  </View>
                  <Image
                    source={icons.rightArrow}
                    className="w-4 h-4"
                    resizeMode="contain"
                    tintColor="#666876"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View className="mt-6 mb-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Quick Answers
          </Text>
          <View className="bg-white">
            <TouchableOpacity
              className="px-5 py-4 bg-white border-b border-black-25"
              activeOpacity={0.7}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                How do I reset my password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-5 py-4 bg-white border-b border-black-25"
              activeOpacity={0.7}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                How do I change my notification settings?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-5 py-4 bg-white border-b border-black-25"
              activeOpacity={0.7}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                How do I delete my account?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-5 py-4 bg-white"
              activeOpacity={0.7}
            >
              <Text className="text-black-300 text-base font-rubik-medium">
                How do I report a bug or issue?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Hours */}
        <View className="px-5 py-6 bg-blue-50 mx-5 rounded-lg mb-8">
          <Text className="text-black-300 text-base font-rubik-medium mb-2">
            Support Hours
          </Text>
          <Text className="text-black-200 text-sm font-rubik">
            Monday - Friday: 9:00 AM - 6:00 PM EST{'\n'}
            Saturday - Sunday: 10:00 AM - 4:00 PM EST
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;