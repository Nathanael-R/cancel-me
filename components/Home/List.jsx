import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Image } from "react-native";
const List = () => {
  return (
    <View className="pt-10">
      <View>
        <Pressable className="flex-row items-center gap-x-1 border-2 py-1 px-2 w-32 rounded-full">
          <Text className="text-base font-semibold">This Week</Text>
          <Entypo name="chevron-thin-down" size={25} />
        </Pressable>
      </View>
      <View>
        <Image source={require('../../assets/stickman.png')} className="h-full"/>
      </View>
    </View>
  );
};

export default List;
