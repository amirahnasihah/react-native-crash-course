import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-fuchsia-600">Home</Text>
      <Link href={"/"} className="text-white bg-cyan-500 p-2">
        Go to root index
      </Link>
    </View>
  );
};

export default Home;
