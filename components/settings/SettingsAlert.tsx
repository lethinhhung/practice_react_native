import React from 'react';
import { Modal, View, Text, TouchableOpacity, Alert } from 'react-native';

interface AlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  buttons?: Array<{
    text: string;
    onPress: () => void;
    style?: 'default' | 'cancel' | 'destructive';
  }>;
  onClose: () => void;
}

const SettingsAlert: React.FC<AlertModalProps> = ({
  visible,
  title,
  message,
  buttons = [{ text: 'OK', onPress: () => {}, style: 'default' }],
  onClose,
}) => {
  const getButtonStyle = (style: 'default' | 'cancel' | 'destructive' = 'default') => {
    switch (style) {
      case 'destructive':
        return 'text-red-500';
      case 'cancel':
        return 'text-black-100';
      default:
        return 'text-primary-300';
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 items-center justify-center p-5">
        <View className="bg-white rounded-lg p-6 w-full max-w-sm">
          <Text className="text-lg font-rubik-semibold text-black-300 mb-3">
            {title}
          </Text>
          <Text className="text-base font-rubik text-black-200 mb-6 leading-relaxed">
            {message}
          </Text>
          <View className="flex-row justify-end space-x-3">
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  button.onPress();
                  onClose();
                }}
                className="px-4 py-2"
              >
                <Text className={`text-base font-rubik-medium ${getButtonStyle(button.style)}`}>
                  {button.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsAlert;