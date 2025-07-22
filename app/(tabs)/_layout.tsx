import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { useTheme } from "@/contexts/ThemeContext";

const TabIcon = ({
  focused,
  icon,
  title,
  isDarkMode,
}: {
  focused: boolean;
  icon: any;
  title: string;
  isDarkMode: boolean;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#0061ff" : (isDarkMode ? "#9CA3AF" : "#666876")}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${
        focused
          ? "text-primary-300 font-rubik-medium"
          : (isDarkMode ? "text-gray-400 font-rubik" : "text-black-200 font-rubik")
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#1E1E1E" : "white",
          position: "absolute",
          borderTopColor: isDarkMode ? "#404040" : "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" isDarkMode={isDarkMode} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" isDarkMode={isDarkMode} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" isDarkMode={isDarkMode} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
