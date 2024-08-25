import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import Images from "@/constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setIsSubmitting(true);
    // Simulate API call to login user
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/");
    }, 2000);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="flex-1 px-4 my-6 w-full h-full"
          style={{ minHeight: Dimensions.get("window").height - 100 }}
        >
          <Image source={Images.logo} resizeMode="contain" />
          <Text className="text-2xl font-psemibold text-white mt-7">
            Sign up
          </Text>

          {/* FORM FIELD */}
          <FormField
            title="Username"
            value={form.email}
            placeholder="Enter your unique username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            placeholder="email@example.com"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 font-pregular">
              Already have an account?{" "}
              <Link className="text-secondary font-psemibold" href={"/sign-in"}>
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
