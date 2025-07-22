import icons from "@/constants/icons";
import { SettingSectionData, UserProfile } from "@/types/settings";

export const mockUserProfile: UserProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: undefined, // Could be a URL or local image
};

export const getSettingsSections = (
  notificationsEnabled: boolean,
  locationEnabled: boolean,
  onSettingPress: (settingId: string) => void,
  onNotificationToggle: (value: boolean) => void,
  onLocationToggle: (value: boolean) => void
): SettingSectionData[] => [
  {
    title: "Account",
    items: [
      {
        id: "personal-info",
        icon: icons.person,
        title: "Personal Information",
        subtitle: "Name, email, phone number",
        type: "navigation",
        onPress: () => onSettingPress("personal-info"),
      },
      {
        id: "security-privacy",
        icon: icons.shield,
        title: "Security & Privacy",
        subtitle: "Password, biometric, privacy settings",
        type: "navigation",
        onPress: () => onSettingPress("security-privacy"),
      },
      {
        id: "payment-methods",
        icon: icons.wallet,
        title: "Payment Methods",
        subtitle: "Credit cards, payment options",
        type: "navigation",
        onPress: () => onSettingPress("payment-methods"),
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        id: "notifications",
        icon: icons.bell,
        title: "Push Notifications",
        subtitle: notificationsEnabled ? "Enabled" : "Disabled",
        type: "toggle",
        value: notificationsEnabled,
        onToggle: onNotificationToggle,
      },
      {
        id: "language",
        icon: icons.language,
        title: "Language",
        subtitle: "English",
        type: "navigation",
        onPress: () => onSettingPress("language"),
      },
      {
        id: "location",
        icon: icons.location,
        title: "Location Services",
        subtitle: locationEnabled ? "Enabled" : "Disabled",
        type: "toggle",
        value: locationEnabled,
        onToggle: onLocationToggle,
      },
    ],
  },
  {
    title: "App",
    items: [
      {
        id: "about",
        icon: icons.info,
        title: "About",
        subtitle: "Version 1.0.0",
        type: "navigation",
        onPress: () => onSettingPress("about"),
      },
      {
        id: "rate-app",
        icon: icons.star,
        title: "Rate App",
        subtitle: "Share your feedback",
        type: "navigation",
        onPress: () => onSettingPress("rate-app"),
      },
      {
        id: "help-support",
        icon: icons.people,
        title: "Help & Support",
        subtitle: "FAQ, contact us",
        type: "navigation",
        onPress: () => onSettingPress("help-support"),
      },
      {
        id: "share-app",
        icon: icons.send,
        title: "Share App",
        subtitle: "Invite friends",
        type: "navigation",
        onPress: () => onSettingPress("share-app"),
      },
    ],
  },
  {
    title: "Account Management",
    items: [
      {
        id: "logout",
        icon: icons.logout,
        title: "Sign Out",
        type: "danger",
        onPress: () => onSettingPress("logout"),
      },
    ],
  },
];