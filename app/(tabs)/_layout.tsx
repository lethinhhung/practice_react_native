import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
import { useTheme } from "../../contexts/ThemeContext";

const TabIcon = ({
  focused,
  icon,
  title,
  isDark,
}: {
  focused: boolean;
  icon: any;
  title: string;
  isDark: boolean;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={
        focused 
          ? (isDark ? "#4A90E2" : "#0061ff") 
          : (isDark ? "#A3A3A3" : "#666876")
      }
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`${
        focused
          ? isDark 
            ? "text-primary-400 font-rubik-medium"
            : "text-primary-300 font-rubik-medium"
          : isDark
            ? "text-dark-600 font-rubik"
            : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#2D2D2D" : "white",
          position: "absolute",
          borderTopColor: isDark ? "#404040" : "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
          shadowColor: isDark ? "#000000" : "#000000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 6,
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" isDark={isDark} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Explore" isDark={isDark} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" isDark={isDark} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
