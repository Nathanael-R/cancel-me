import { View, Text } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Image } from "react-native";
const PlanInfo = () => {
  return (
    <View className="px-5 space-y-5">
      <Text className="font-semibold text-xl tracking-wider">
        Look at the Northern Lights
      </Text>
      <View className="flex-row space-x-2 items-center">
        <Ionicons name="ios-location-outline" size={25} />
        <Text className="text-base font-semibold">Kay's house</Text>
      </View>
      <View className="flex-row space-x-2 items-center">
        <Ionicons name="md-calendar-sharp" size={25} />
        <Text className="text-base font-semibold">12 Aug - 15 Aug</Text>
      </View>
      <View className="px-4 py-1 rounded-full bg-[#E4BC2B] w-24 justify-center items-center border-2">
        <Text className="font-medium text-base">Medium</Text>
      </View>
      <View>
        <Text className="font-semibold text-lg mb-3">Description</Text>
        <Text>
          What do you think about chasing the Northern Lights? Here's the
          lowdown: Grab your comfiest winter gear, pack that camera (don't
          forget the tripod), toss in a power bank for your gadgets and bring a
          binoculars
        </Text>
      </View>
      <View className="border-b-2" />
      <View className="space-y-5">
        <Text>Are you in or out</Text>
        <View className="flex-row justify-between">
          <Pressable className="flex-row space-x-3 items-center justify-center border-2 rounded-full px-5 py-1">
            <Text className="text-xl">I'm in</Text>
            <FontAwesome5 name="thumbs-up" size={25} />
          </Pressable>
          <Pressable className="flex-row space-x-3 items-center justify-center border-2 rounded-full px-5 py-1">
            <Text className="text-xl">I'm out</Text>
            <FontAwesome5 name="thumbs-down" size={25} />
          </Pressable>
        </View>
        <View className="h-60 items-center space-y-2">
          <Image
            source={require("../../assets/confused-stickman.png")}
            className="h-full w-60"
          />
          <Text className="font-semibold text-base text-slate-600">You need to vote to see the poll results</Text>
        </View>
      </View>
    </View>
  );
};

export default PlanInfo;
