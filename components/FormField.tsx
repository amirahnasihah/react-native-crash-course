import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
} from "react-native";
import React, { useState } from "react";
import icons from "@/constants/Icons";

// Define interface for props
interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void; // Corrected to function type
  otherStyles?: string; // Assuming this might be a className string
  keyboardType?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder, // Default placeholder if not provided
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-base text-white font-psemibold"
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          value={value}
          onChangeText={handleChangeText} // onChangeText is used to handle input changes in TextInput
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={props.keyboardType as KeyboardTypeOptions} // Add this line to use the keyboardType prop
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
