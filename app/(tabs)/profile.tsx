import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import SettingsItem from '@/components/SettingsItem';
import icons from '@/constants/icons';

const Profile = () => {
  const handleSettingsPress = (route: string) => {
    switch (route) {
      case 'privacy':
        router.push('/settings/privacy');
        break;
      case 'notifications':
        router.push('/settings/notifications');
        break;
      case 'language':
        router.push('/settings/language');
        break;
      case 'edit-profile':
        // TODO: Implement edit profile screen
        console.log('Navigate to edit profile');
        break;
      case 'payments':
        // TODO: Implement payments screen
        console.log('Navigate to payments');
        break;
      case 'location':
        // TODO: Implement location screen
        console.log('Navigate to location');
        break;
      case 'data-usage':
        // TODO: Implement data usage screen
        console.log('Navigate to data usage');
        break;
      case 'help':
        router.push('/settings/help');
        break;
      case 'contact':
        // TODO: Implement contact screen
        console.log('Navigate to contact');
        break;
      case 'rate':
        // TODO: Implement rate app functionality
        console.log('Rate app');
        break;
      case 'terms':
        // TODO: Implement terms screen
        console.log('Navigate to terms');
        break;
      case 'privacy-policy':
        // TODO: Implement privacy policy screen
        console.log('Navigate to privacy policy');
        break;
      case 'about':
        router.push('/settings/about');
        break;
      case 'logout':
        // TODO: Implement logout functionality
        console.log('Logout user');
        break;
      default:
        console.log(`Navigate to: ${route}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 py-4 border-b border-black-25">
        <Text className="text-2xl font-rubik-bold text-black-300">Settings</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View className="px-5 py-6 border-b-8 border-black-25">
          <View className="flex-row items-center">
            <Image
              source={require('@/assets/images/avatar.png')}
              className="w-16 h-16 rounded-full mr-4"
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="text-lg font-rubik-bold text-black-300">
                John Doe
              </Text>
              <Text className="text-sm font-rubik text-black-200 mt-1">
                john.doe@example.com
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleSettingsPress('edit-profile')}
              className="p-2"
            >
              <Image
                source={icons.edit}
                className="w-5 h-5"
                resizeMode="contain"
                tintColor="#0061ff"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Account Settings */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Account
          </Text>
          <View className="bg-white">
            <SettingsItem
              icon={icons.shield}
              title="Privacy & Security"
              subtitle="Manage your privacy settings"
              onPress={() => handleSettingsPress('privacy')}
            />
            <SettingsItem
              icon={icons.bell}
              title="Notifications"
              subtitle="Push notifications and alerts"
              onPress={() => handleSettingsPress('notifications')}
            />
            <SettingsItem
              icon={icons.wallet}
              title="Payment Methods"
              subtitle="Manage payment options"
              onPress={() => handleSettingsPress('payments')}
              isLast
            />
          </View>
        </View>

        {/* Preferences */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Preferences
          </Text>
          <View className="bg-white">
            <SettingsItem
              icon={icons.language}
              title="Language"
              subtitle="English"
              onPress={() => handleSettingsPress('language')}
            />
            <SettingsItem
              icon={icons.location}
              title="Location Services"
              subtitle="Manage location permissions"
              onPress={() => handleSettingsPress('location')}
            />
            <SettingsItem
              icon={icons.wifi}
              title="Data Usage"
              subtitle="Monitor data consumption"
              onPress={() => handleSettingsPress('data-usage')}
              isLast
            />
          </View>
        </View>

        {/* Support */}
        <View className="mt-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Support
          </Text>
          <View className="bg-white">
            <SettingsItem
              icon={icons.chat}
              title="Help Center"
              subtitle="Get help and support"
              onPress={() => handleSettingsPress('help')}
            />
            <SettingsItem
              icon={icons.people}
              title="Contact Us"
              subtitle="Send feedback or report issues"
              onPress={() => handleSettingsPress('contact')}
            />
            <SettingsItem
              icon={icons.star}
              title="Rate App"
              subtitle="Rate us in the App Store"
              onPress={() => handleSettingsPress('rate')}
              showRightArrow={false}
              isLast
            />
          </View>
        </View>

        {/* Legal */}
        <View className="mt-6 mb-6">
          <Text className="px-5 text-sm font-rubik-medium text-black-200 mb-2 uppercase">
            Legal
          </Text>
          <View className="bg-white">
            <SettingsItem
              icon={icons.info}
              title="Terms of Service"
              onPress={() => handleSettingsPress('terms')}
            />
            <SettingsItem
              icon={icons.shield}
              title="Privacy Policy"
              onPress={() => handleSettingsPress('privacy-policy')}
            />
            <SettingsItem
              icon={icons.info}
              title="About"
              subtitle="Version 1.0.0"
              onPress={() => handleSettingsPress('about')}
              isLast
            />
          </View>
        </View>

        {/* Logout Button */}
        <View className="px-5 mb-8">
          <TouchableOpacity
            className="bg-red-500 py-4 rounded-lg flex-row items-center justify-center"
            onPress={() => handleSettingsPress('logout')}
            activeOpacity={0.8}
          >
            <Image
              source={icons.logout}
              className="w-5 h-5 mr-2"
              resizeMode="contain"
              tintColor="white"
            />
            <Text className="text-white font-rubik-medium text-base">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
