import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { 
  SettingsMenuItem, 
  SettingsSection, 
  UserProfileCard, 
  LogoutButton,
  SettingsAlert,
  SettingsBadge,
  SettingsHeader
} from "@/components/settings";

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  const handleEditProfile = () => {
    // TODO: Navigate to edit profile screen
    console.log("Edit profile pressed");
  };

  const handleAccountSettings = () => {
    // TODO: Navigate to account settings
    console.log("Account settings pressed");
  };

  const handleNotifications = () => {
    // TODO: Navigate to notifications settings
    console.log("Notifications pressed");
  };

  const handlePrivacy = () => {
    // TODO: Navigate to privacy settings
    console.log("Privacy pressed");
  };

  const handleSecurity = () => {
    // TODO: Navigate to security settings
    console.log("Security pressed");
  };

  const handleLanguage = () => {
    // TODO: Navigate to language settings
    console.log("Language pressed");
  };

  const handleHelp = () => {
    // TODO: Navigate to help screen
    console.log("Help pressed");
  };

  const handleAbout = () => {
    // TODO: Navigate to about screen
    console.log("About pressed");
  };

  const handleLogout = () => {
    setShowLogoutAlert(true);
  };

  const confirmLogout = () => {
    // TODO: Implement actual logout functionality
    console.log("User confirmed logout");
    // Reset any app state, clear tokens, navigate to login screen, etc.
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      
      {/* Header */}
      <SettingsHeader title="Settings" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* User Profile Section */}
        <UserProfileCard
          name="John Doe"
          email="johndoe@example.com"
          onEditPress={handleEditProfile}
        />

        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingsMenuItem
            icon={icons.person}
            title="Account Information"
            subtitle="Update your personal information"
            onPress={handleAccountSettings}
          />
          <SettingsMenuItem
            icon={icons.wallet}
            title="Payment Methods"
            subtitle="Manage your payment options"
            onPress={() => console.log("Payment methods")}
          />
          <SettingsMenuItem
            icon={icons.calendar}
            title="Subscription"
            subtitle="Manage your subscription plan"
            onPress={() => console.log("Subscription")}
            rightComponent={<SettingsBadge text="NEW" variant="success" />}
          />
        </SettingsSection>

        {/* Preferences Section */}
        <SettingsSection title="Preferences">
          <SettingsMenuItem
            icon={icons.bell}
            title="Notifications"
            subtitle="Push notifications, email alerts"
            onPress={handleNotifications}
            showArrow={false}
            rightComponent={
              <View className="flex-row items-center">
                <View className="mr-3">
                  <SettingsBadge count={3} variant="danger" />
                </View>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: "#D1D5DB", true: "#0061FF" }}
                  thumbColor={notificationsEnabled ? "#ffffff" : "#ffffff"}
                />
              </View>
            }
          />
          <SettingsMenuItem
            icon={icons.language}
            title="Language"
            subtitle="English"
            onPress={handleLanguage}
          />
          <SettingsMenuItem
            icon={icons.location}
            title="Location Services"
            subtitle="Allow location access"
            onPress={() => console.log("Location")}
            showArrow={false}
            rightComponent={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: "#D1D5DB", true: "#0061FF" }}
                thumbColor={locationEnabled ? "#ffffff" : "#ffffff"}
              />
            }
          />
        </SettingsSection>

        {/* Privacy & Security Section */}
        <SettingsSection title="Privacy & Security">
          <SettingsMenuItem
            icon={icons.shield}
            title="Privacy Settings"
            subtitle="Control your privacy preferences"
            onPress={handlePrivacy}
          />
          <SettingsMenuItem
            icon={icons.shield}
            title="Security"
            subtitle="Password, two-factor authentication"
            onPress={handleSecurity}
          />
        </SettingsSection>

        {/* Support Section */}
        <SettingsSection title="Support">
          <SettingsMenuItem
            icon={icons.info}
            title="Help Center"
            subtitle="Get help and support"
            onPress={handleHelp}
          />
          <SettingsMenuItem
            icon={icons.info}
            title="About"
            subtitle="App version, terms & conditions"
            onPress={handleAbout}
          />
          <SettingsMenuItem
            icon={icons.send}
            title="Contact Us"
            subtitle="Send feedback or report issues"
            onPress={() => console.log("Contact us")}
          />
        </SettingsSection>

        {/* Logout Section */}
        <LogoutButton onPress={handleLogout} />

        {/* Version Info */}
        <View className="items-center pb-8">
          <Text className="text-sm font-rubik text-black-100">
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>

      {/* Logout Confirmation Alert */}
      <SettingsAlert
        visible={showLogoutAlert}
        title="Logout"
        message="Are you sure you want to logout? You'll need to sign in again to access your account."
        buttons={[
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Logout',
            onPress: confirmLogout,
            style: 'destructive',
          },
        ]}
        onClose={() => setShowLogoutAlert(false)}
      />
    </SafeAreaView>
  );
};

export default Profile;
