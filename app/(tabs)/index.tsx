// Home page
import { StyleSheet, View, Text, StatusBar } from "react-native";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Seha!</Text>
      <Link href="/(tabs)/explore" style={{ color: "purple" }}>
        Go to profile
      </Link>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
