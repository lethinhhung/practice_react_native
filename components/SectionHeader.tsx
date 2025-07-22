import { Text } from "react-native";
import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <Text className="text-black-200 font-rubik-medium text-sm uppercase tracking-wide px-5 py-3 bg-accent-100">
    {title}
  </Text>
);

export default SectionHeader;