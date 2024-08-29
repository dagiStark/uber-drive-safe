import { Redirect } from "expo-router";
import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { useAuth } from "@clerk/clerk-expo";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
