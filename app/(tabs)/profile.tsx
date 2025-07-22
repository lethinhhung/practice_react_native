import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

interface SettingItemProps {
  icon: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  hasArrow?: boolean;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
  isDanger?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  hasArrow = true,
  isToggle = false,
  toggleValue = false,
  onToggle,
  isDanger = false,
}) => {
  return (
    <TouchableOpacity
      onPress={isToggle ? () => onToggle?.(!toggleValue) : onPress}
      className="flex-row items-center justify-between py-4 px-5 border-b border-gray-100"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center flex-1">
        <Image
          source={icon}
          className="w-6 h-6 mr-4"
          tintColor={isDanger ? "#f75555" : "#666876"}
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text
            className={`text-base font-rubik-medium ${
              isDanger ? "text-danger" : "text-black-300"
            }`}
          >
            {title}
          </Text>
          {subtitle && (
            <Text className="text-sm text-black-100 font-rubik mt-1">
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {isToggle ? (
        <View
          className={`w-12 h-6 rounded-full flex-row items-center px-1 ${
            toggleValue ? "bg-primary-300" : "bg-gray-300"
          }`}
        >
          <View
            className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              toggleValue ? "ml-auto" : "ml-0"
            }`}
          />
        </View>
      ) : (
        hasArrow && (
          <Image
            source={icons.rightArrow}
            className="w-4 h-4"
            tintColor="#666876"
            resizeMode="contain"
          />
        )
      )}
    </TouchableOpacity>
  );
};

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleAccountSettings = () => {
    Alert.alert("Account Settings", "Navigate to account settings");
  };

  const handlePrivacy = () => {
    Alert.alert("Privacy", "Navigate to privacy settings");
  };

  const handleSecurity = () => {
    Alert.alert("Security", "Navigate to security settings");
  };

  const handleLanguage = () => {
    Alert.alert("Language", "Select language preferences");
  };

  const handleSupport = () => {
    Alert.alert("Support", "Contact support or view help");
  };

  const handleAbout = () => {
    Alert.alert("About", "App version and information");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            Alert.alert("Logged out", "You have been logged out successfully");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 py-8">
          <Text className="text-2xl font-rubik-bold text-black-300 mb-2">
            Settings
          </Text>
          <Text className="text-base font-rubik text-black-100">
            Manage your account and preferences
          </Text>
        </View>

        {/* User Profile Section */}
        <View className="bg-accent-100 mx-5 rounded-xl p-5 mb-6">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/avatar.png")}
              className="w-16 h-16 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-lg font-rubik-semibold text-black-300">
                John Doe
              </Text>
              <Text className="text-sm font-rubik text-black-100 mt-1">
                john.doe@example.com
              </Text>
            </View>
            <TouchableOpacity
              className="p-2"
              onPress={() => Alert.alert("Edit Profile", "Navigate to profile editing")}
            >
              <Image
                source={icons.edit}
                className="w-5 h-5"
                tintColor="#0061FF"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Section */}
        <View className="bg-white mb-6">
          <Text className="text-lg font-rubik-semibold text-black-300 px-5 mb-3">
            Account
          </Text>
          <SettingItem
            icon={icons.person}
            title="Personal Information"
            subtitle="Manage your personal details"
            onPress={handleAccountSettings}
          />
          <SettingItem
            icon={icons.wallet}
            title="Payment Methods"
            subtitle="Manage cards and payment options"
            onPress={() => Alert.alert("Payment Methods", "Manage payment options")}
          />
          <SettingItem
            icon={icons.calendar}
            title="Booking History"
            subtitle="View your past bookings"
            onPress={() => Alert.alert("Booking History", "View booking history")}
          />
        </View>

        {/* Preferences Section */}
        <View className="bg-white mb-6">
          <Text className="text-lg font-rubik-semibold text-black-300 px-5 mb-3">
            Preferences
          </Text>
          <SettingItem
            icon={icons.bell}
            title="Notifications"
            subtitle="Push notifications and alerts"
            isToggle
            toggleValue={notificationsEnabled}
            onToggle={setNotificationsEnabled}
            hasArrow={false}
          />
          <SettingItem
            icon={icons.location}
            title="Location Services"
            subtitle="Allow location access"
            isToggle
            toggleValue={locationEnabled}
            onToggle={setLocationEnabled}
            hasArrow={false}
          />
          <SettingItem
            icon={icons.language}
            title="Language"
            subtitle="English (US)"
            onPress={handleLanguage}
          />
        </View>

        {/* Privacy & Security Section */}
        <View className="bg-white mb-6">
          <Text className="text-lg font-rubik-semibold text-black-300 px-5 mb-3">
            Privacy & Security
          </Text>
          <SettingItem
            icon={icons.shield}
            title="Privacy Settings"
            subtitle="Control your data and privacy"
            onPress={handlePrivacy}
          />
          <SettingItem
            icon={icons.wallet}
            title="Security"
            subtitle="Password and authentication"
            onPress={handleSecurity}
          />
        </View>

        {/* Support Section */}
        <View className="bg-white mb-6">
          <Text className="text-lg font-rubik-semibold text-black-300 px-5 mb-3">
            Support
          </Text>
          <SettingItem
            icon={icons.info}
            title="Help & Support"
            subtitle="FAQs and contact support"
            onPress={handleSupport}
          />
          <SettingItem
            icon={icons.info}
            title="About"
            subtitle="App version and legal info"
            onPress={handleAbout}
          />
        </View>

        {/* Danger Zone */}
        <View className="bg-white mb-20">
          <Text className="text-lg font-rubik-semibold text-black-300 px-5 mb-3">
            Account Actions
          </Text>
          <SettingItem
            icon={icons.logout}
            title="Logout"
            onPress={handleLogout}
            hasArrow={false}
            isDanger
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
