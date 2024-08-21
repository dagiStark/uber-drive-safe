import { Redirect } from 'expo-router'
import React from 'react'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  return <Redirect href="/(auth)/welcome"/>
}

export default Home
