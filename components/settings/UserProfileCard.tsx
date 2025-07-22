import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icons from "@/constants/icons";

interface UserProfileCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
  onEditPress: () => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  email,
  avatarUrl = "https://via.placeholder.com/80",
  onEditPress,
}) => (
  <View className="bg-white mx-5 mt-6 rounded-lg p-5 items-center">
    <View className="relative">
      <Image
        source={{ uri: avatarUrl }}
        className="w-20 h-20 rounded-full"
      />
      <TouchableOpacity
        onPress={onEditPress}
        className="absolute -bottom-1 -right-1 bg-primary-300 w-8 h-8 rounded-full items-center justify-center"
      >
        <Image source={icons.edit} className="w-4 h-4" tintColor="white" />
      </TouchableOpacity>
    </View>
    <Text className="text-xl font-rubik-semibold text-black-300 mt-4">
      {name}
    </Text>
    <Text className="text-base font-rubik text-black-200 mt-1">
      {email}
    </Text>
    <TouchableOpacity
      onPress={onEditPress}
      className="mt-4 bg-gray-100 px-6 py-2 rounded-full"
    >
      <Text className="text-sm font-rubik-medium text-black-300">
        Edit Profile
      </Text>
    </TouchableOpacity>
  </View>
);

export default UserProfileCard;