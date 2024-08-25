import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";

// Define interface for props
interface ButtonProps {
  title: string;
  containerStyles?: string;
  handlePress: (event: GestureResponderEvent) => void;
  textStyles?: TextStyle; // Optional text styles
  isLoading?: boolean; // Optional loading state
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`min-h-[62px] items-center justify-center bg-secondary rounded-xl ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-lg font-psemibold text-primary ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size={"small"}
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
