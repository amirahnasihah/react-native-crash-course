// Home screen page
import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/Images";
import CustomButton from "@/components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[250px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px] w-full"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Seha</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-7 text-gray-100 text-center text-sm font-pregular">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Seha
          </Text>

          <CustomButton
            title={"Continue with Email"}
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-8"
          />

          {/* StatusBar -> custom status info (battery, time ...) */}
          <StatusBar backgroundColor={"#161922"} barStyle={"light-content"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
