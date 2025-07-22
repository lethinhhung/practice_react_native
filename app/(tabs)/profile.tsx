import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

// SettingsItem component for individual settings rows
const SettingsItem = ({ 
  icon, 
  title, 
  subtitle, 
  onPress, 
  showArrow = true, 
  showSwitch = false,
  switchValue = false,
  onSwitchChange,
  danger = false 
}: {
  icon: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  danger?: boolean;
}) => (
  <TouchableOpacity 
    className="flex-row items-center justify-between p-4 border-b border-gray-100"
    onPress={onPress}
    disabled={showSwitch}
  >
    <View className="flex-row items-center flex-1">
      <View className={`w-10 h-10 rounded-lg ${danger ? 'bg-red-50' : 'bg-gray-50'} items-center justify-center mr-3`}>
        <Image 
          source={icon} 
          className="w-5 h-5" 
          tintColor={danger ? "#f75555" : "#666876"}
          resizeMode="contain" 
        />
      </View>
      <View className="flex-1">
        <Text className={`${danger ? 'text-danger' : 'text-black-300'} font-rubik-medium text-base`}>
          {title}
        </Text>
        {subtitle && (
          <Text className="text-black-200 font-rubik text-sm mt-1">
            {subtitle}
          </Text>
        )}
      </View>
    </View>
    
    {showSwitch && (
      <Switch
        value={switchValue}
        onValueChange={onSwitchChange}
        trackColor={{ false: "#E5E5E5", true: "#0061FF" }}
        thumbColor="#FFFFFF"
      />
    )}
    
    {showArrow && !showSwitch && (
      <Image 
        source={icons.rightArrow} 
        className="w-5 h-5" 
        tintColor="#666876"
        resizeMode="contain" 
      />
    )}
  </TouchableOpacity>
);

// SettingsSection component for grouping settings
const SettingsSection = ({ 
  title, 
  children 
}: { 
  title?: string; 
  children: React.ReactNode;
}) => (
  <View className="mb-6">
    {title && (
      <Text className="text-black-200 font-rubik-medium text-sm uppercase tracking-wide px-4 mb-2">
        {title}
      </Text>
    )}
    <View className="bg-white rounded-xl mx-4 overflow-hidden">
      {children}
    </View>
  </View>
);

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const handleAccountPress = () => {
    // Navigate to account settings
    console.log("Account settings pressed");
    // In a real app, you would navigate to a specific screen
    // router.push('/account-settings');
  };

  const handleNotificationSettings = () => {
    // Navigate to notification settings
    console.log("Notification settings pressed");
    // In a real app, you would navigate to notification settings
    // router.push('/notification-settings');
  };

  const handlePrivacyPress = () => {
    // Navigate to privacy settings
    console.log("Privacy settings pressed");
    // In a real app, you would navigate to privacy settings
    // router.push('/privacy-settings');
  };

  const handleLanguagePress = () => {
    // Navigate to language settings
    console.log("Language settings pressed");
    // In a real app, you would show language selection modal
    // showLanguageModal();
  };

  const handleHelpPress = () => {
    // Navigate to help & support
    console.log("Help & Support pressed");
    // In a real app, you would navigate to help section
    // router.push('/help-support');
  };

  const handleAboutPress = () => {
    // Navigate to about page
    console.log("About pressed");
    // In a real app, you would navigate to about page
    // router.push('/about');
  };

  const handleLogoutPress = () => {
    // Handle logout with confirmation
    console.log("Logout pressed");
    // In a real app, you would show confirmation modal and then logout
    // Alert.alert(
    //   "Sign Out",
    //   "Are you sure you want to sign out?",
    //   [
    //     { text: "Cancel", style: "cancel" },
    //     { text: "Sign Out", style: "destructive", onPress: () => signOut() }
    //   ]
    // );
  };

  return (
    <SafeAreaView className="flex-1 bg-accent-100">
      {/* Header */}
      <View className="px-4 py-6 border-b border-gray-100 bg-white">
        <Text className="text-black-300 font-rubik-bold text-2xl">Settings</Text>
        <Text className="text-black-200 font-rubik text-base mt-1">
          Manage your account and preferences
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingsItem
            icon={icons.person}
            title="Profile"
            subtitle="Edit your profile information"
            onPress={handleAccountPress}
          />
          <SettingsItem
            icon={icons.wallet}
            title="Payment Methods"
            subtitle="Manage your payment options"
            onPress={handleAccountPress}
          />
          <SettingsItem
            icon={icons.shield}
            title="Security"
            subtitle="Password, 2FA, and security settings"
            onPress={handleAccountPress}
          />
        </SettingsSection>

        {/* Preferences Section */}
        <SettingsSection title="Preferences">
          <SettingsItem
            icon={icons.bell}
            title="Push Notifications"
            subtitle="Receive updates and alerts"
            showSwitch={true}
            switchValue={notificationsEnabled}
            onSwitchChange={setNotificationsEnabled}
            showArrow={false}
          />
          <SettingsItem
            icon={icons.location}
            title="Location Services"
            subtitle="Allow location access"
            showSwitch={true}
            switchValue={locationEnabled}
            onSwitchChange={setLocationEnabled}
            showArrow={false}
          />
          <SettingsItem
            icon={icons.language}
            title="Language"
            subtitle="English"
            onPress={handleLanguagePress}
          />
        </SettingsSection>

        {/* Privacy Section */}
        <SettingsSection title="Privacy & Safety">
          <SettingsItem
            icon={icons.shield}
            title="Privacy Policy"
            subtitle="View our privacy practices"
            onPress={handlePrivacyPress}
          />
          <SettingsItem
            icon={icons.people}
            title="Data & Storage"
            subtitle="Manage your data preferences"
            onPress={handlePrivacyPress}
          />
        </SettingsSection>

        {/* Support Section */}
        <SettingsSection title="Support">
          <SettingsItem
            icon={icons.info}
            title="Help & Support"
            subtitle="Get help and contact support"
            onPress={handleHelpPress}
          />
          <SettingsItem
            icon={icons.send}
            title="Feedback"
            subtitle="Share your thoughts with us"
            onPress={handleHelpPress}
          />
          <SettingsItem
            icon={icons.info}
            title="About"
            subtitle="Version 1.0.0"
            onPress={handleAboutPress}
          />
        </SettingsSection>

        {/* Account Actions */}
        <SettingsSection>
          <SettingsItem
            icon={icons.logout}
            title="Sign Out"
            onPress={handleLogoutPress}
            showArrow={false}
            danger={true}
          />
        </SettingsSection>

        {/* Bottom padding for safe scrolling */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
