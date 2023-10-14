import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Image } from "react-native";
const List = () => {
  return (
    <View className="pt-10">
      <View>
        <Pressable className="flex-row items-center border-2 py-1 px-2 w-32 rounded-full mb-2" style={{columnGap: 10}}>
          <Text className="text-base font-semibold">This Week</Text>
          <Entypo name="chevron-thin-down" size={20} />
        </Pressable>
      </View>
      <View className="items-center justify-center">
        <Image source={require('../../assets/stickman.png')} className="h-40 w-full mb-4"/>
        <Text className="font-medium text-base">You have no plans for this week</Text>
      </View>
    </View>
  );
};

export default List;
