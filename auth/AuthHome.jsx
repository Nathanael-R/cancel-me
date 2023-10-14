import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
const AuthHome = () => {
  const { width } = Dimensions.get("window");
  return (
    <View className="flex-1 px-5 justify-center gap-y-6" style={{ width: width }}>
      <View>
        <Image source={require("../assets/Hero.png")} className="h-60 w-full" />
      </View>
      <View>
        <Text className="text-3xl font-semibold mb-4">
          Make plans memories with your friends and family
        </Text>
        <Text className="text-lg font-semibold">
          Sign in or Sign up below to create a group or join one
        </Text>
      </View>
      <View className="gap-y-4">
        <TouchableHighlight className="bg-[#FF9900] py-5 rounded-lg items-center">
          <Text className="text-2xl font-semibold">Sign in</Text>
        </TouchableHighlight>
        <TouchableHighlight className="border-2 border-[#FF9900] py-5 rounded-lg items-center">
          <Text className="font-semibold text-2xl">Sign up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default AuthHome;
