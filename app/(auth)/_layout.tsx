import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor={"#161622"} style={"light"} />
    </>
  );
};

export default AuthLayout;

// why separate layout for the Auth?? Because only in Auth screen, there will be not tabs bottom navbar...
