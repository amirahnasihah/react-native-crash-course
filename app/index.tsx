// Home page
import { StyleSheet, View, Text, StatusBar } from "react-native";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-3xl text-white font-pblack">Seha!</Text>
      <Link href="/home" style={{ color: "skyblue" }}>
        Go to home
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
