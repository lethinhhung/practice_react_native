export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export interface SettingSectionData {
  title: string;
  items: SettingItemData[];
}

export interface SettingItemData {
  id: string;
  icon: any;
  title: string;
  subtitle?: string;
  type: 'navigation' | 'toggle' | 'danger';
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
}

export interface SettingsScreenProps {
  userProfile: UserProfile;
  onSettingPress: (settingId: string) => void;
}