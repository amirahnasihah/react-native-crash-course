import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import images from "../../constants/Images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
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
          <Image source={images.logo} resizeMode="contain" />
          <Text className="text-2xl font-psemibold text-white mt-7">
            Sign In
          </Text>

          {/* FORM FIELD */}
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
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

          <Text className="text-gray-100 mt-7 text-right">
            Forgot password?
          </Text>

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 font-pregular">
              Don't have an account?{" "}
              <Link className="text-secondary font-psemibold" href={"/sign-up"}>
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
