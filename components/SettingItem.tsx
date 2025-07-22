import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import { SettingItemData } from "@/types/settings";

interface SettingItemProps {
  item: SettingItemData;
}

const SettingItem: React.FC<SettingItemProps> = ({ item }) => {
  const isDanger = item.type === 'danger';
  const isToggle = item.type === 'toggle';
  const showArrow = item.type === 'navigation';

  return (
    <TouchableOpacity
      className="flex-row items-center py-4 px-5 bg-white border-b border-gray-100"
      onPress={item.onPress}
      disabled={isToggle}
    >
      <View className={`w-10 h-10 ${isDanger ? 'bg-red-50' : 'bg-primary-100'} rounded-lg items-center justify-center mr-4`}>
        <Image 
          source={item.icon} 
          className="w-5 h-5" 
          tintColor={isDanger ? "#f75555" : "#0061FF"} 
        />
      </View>
      
      <View className="flex-1">
        <Text className={`${isDanger ? 'text-danger' : 'text-black-300'} font-rubik-medium text-base`}>
          {item.title}
        </Text>
        {item.subtitle && (
          <Text className="text-black-200 font-rubik text-sm mt-1">
            {item.subtitle}
          </Text>
        )}
      </View>
      
      {isToggle ? (
        <Switch
          value={item.value || false}
          onValueChange={item.onToggle}
          trackColor={{ false: "#E5E5E5", true: "#0061FF" }}
          thumbColor="#FFFFFF"
        />
      ) : showArrow ? (
        <Image source={icons.rightArrow} className="w-4 h-4" tintColor="#666876" />
      ) : null}
    </TouchableOpacity>
  );
};

export default SettingItem;