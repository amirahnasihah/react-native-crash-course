import { View, Text } from "react-native";
import React from "react";

const AuthLayout = () => {
  return (
    <View>
      <Text>AuthLayout</Text>
    </View>
  );
};

export default AuthLayout;

// why separate layout for the Auth?? Because only in Auth screen, there will be not tabs bottom navbar...
