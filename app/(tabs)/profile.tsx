import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const About = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const appFeatures = [
    {
      id: 1,
      title: "Create Todos",
      description: "Add new todo items with title and description",
      icon: icons.edit,
    },
    {
      id: 2,
      title: "Mark Complete",
      description: "Tap on any todo to mark it as completed",
      icon: icons.star,
    },
    {
      id: 3,
      title: "Clean Interface",
      description: "Simple and intuitive user interface",
      icon: icons.heart,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-5 pb-3">
          <Text className="text-2xl font-rubik-bold text-black-300">About</Text>
        </View>

        <View className="w-full h-0.5 bg-gray-200 rounded-full mb-6"></View>

        {/* App Info Section */}
        <View className="mb-8">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-4">
            Todo App
          </Text>
          <Text className="text-base font-rubik text-black-200 leading-6">
            A simple and elegant todo application built with React Native and Expo. 
            Manage your daily tasks with ease and keep track of your productivity.
          </Text>
        </View>

        {/* Features Section */}
        <View className="mb-8">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-4">
            Features
          </Text>
          {appFeatures.map((feature) => (
            <View
              key={feature.id}
              className="flex-row items-center bg-white p-4 mb-3 rounded-lg border border-gray-100"
            >
              <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center mr-4">
                <Image
                  source={feature.icon}
                  className="w-6 h-6"
                  tintColor="#0061FF"
                  resizeMode="contain"
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-rubik-semibold text-black-300 mb-1">
                  {feature.title}
                </Text>
                <Text className="text-sm font-rubik text-black-200">
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Version Info */}
        <View className="mb-8">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-4">
            App Information
          </Text>
          <View className="bg-white p-4 rounded-lg border border-gray-100">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-base font-rubik text-black-200">Version</Text>
              <Text className="text-base font-rubik-medium text-black-300">1.0.0</Text>
            </View>
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-base font-rubik text-black-200">Platform</Text>
              <Text className="text-base font-rubik-medium text-black-300">React Native</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-rubik text-black-200">Framework</Text>
              <Text className="text-base font-rubik-medium text-black-300">Expo</Text>
            </View>
          </View>
        </View>

        {/* Developer Info */}
        <View className="mb-8">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-4">
            Developer
          </Text>
          <View className="bg-white p-4 rounded-lg border border-gray-100">
            <Text className="text-base font-rubik-medium text-black-300 mb-2">
              Practice React Native Developer
            </Text>
            <Text className="text-sm font-rubik text-black-200 mb-4">
              This app was created as a practice project to learn React Native development 
              with modern tools and best practices.
            </Text>
          </View>
        </View>

        {/* Contact Section */}
        <View className="mb-8">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-4">
            Contact & Support
          </Text>
          <TouchableOpacity
            className="flex-row items-center bg-white p-4 mb-3 rounded-lg border border-gray-100"
            onPress={() => handleLinkPress("mailto:support@todoapp.com")}
          >
            <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center mr-4">
              <Image
                source={icons.send}
                className="w-6 h-6"
                tintColor="#0061FF"
                resizeMode="contain"
              />
            </View>
            <View className="flex-1">
              <Text className="text-base font-rubik-medium text-black-300">
                Email Support
              </Text>
              <Text className="text-sm font-rubik text-black-200">
                support@todoapp.com
              </Text>
            </View>
            <Image
              source={icons.rightArrow}
              className="w-4 h-4"
              tintColor="#666876"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center pb-8">
          <Text className="text-sm font-rubik text-black-100 text-center">
            Made with ❤️ using React Native & Expo
          </Text>
          <Text className="text-xs font-rubik text-black-100 mt-2">
            © 2024 Todo App. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
