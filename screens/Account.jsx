import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto, Entypo, AntDesign } from "@expo/vector-icons";
const Account = () => {
  return (
    <View className="px-5 space-y-7">
      <View>
        <Text className="font-semibold text-lg">Anon</Text>
        <View className="flex-row space-x-4">
          <View className="flex-row space-x-2">
            <Text className="font-semibold text-base">Total Votes</Text>
            <Text className="font-semibold text-base">0</Text>
          </View>
          <View className="flex-row space-x-2">
            <Text className="font-semibold text-base">Ins</Text>
            <Text className="font-semibold text-base">0</Text>
          </View>
          <View className="flex-row space-x-2">
            <Text className="font-semibold text-base">Outs</Text>
            <Text className="font-semibold text-base">0</Text>
          </View>
        </View>
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-semibold">Your Personal Invite Link</Text>
        <Text>
          This is your unique ID, anyone who has it can invite you to a group
        </Text>
        <View className="flex-row items-center justify-between">
          <Text>Loremipsumdolorsitametcons</Text>
          <Pressable className="flex-row items-center space-x-2">
            <Text className="text-base">Copy</Text>
            <Fontisto name="copy" size={20} />
          </Pressable>
        </View>
      </View>
      <View className="space-y-5">
        <View className="space-y-2">
        <Text className="text-lg font-semibold">Groups</Text>
        <Pressable className="flex-row items-center border-2 px-1 py-1 w-24 rounded-full space-x-2 justify-center">
          <Text>Family</Text>
          <Entypo name="chevron-thin-down" size={15} />
        </Pressable>
        </View>
        <View className="space-y-2">
            <View className="mb-4">
                <Text className="text-lg font-semibold">Group Name</Text>
                <Text>Family</Text>
            </View>
          <Text className="text-lg font-semibold">Your group invite link</Text>
          <Text>
            This link is unique to your group, send it to someone to invite them
            to your group
          </Text>
          <View className="flex-row items-center justify-between">
            <Text>Loremipsumdolorsitametcons</Text>
            <Pressable className="flex-row items-center space-x-2">
              <Text className="text-base">Copy</Text>
              <Fontisto name="copy" size={20} />
            </Pressable>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-lg font-semibold">Delete group</Text>
          <Text className="mb-2">
            Heyyyy take a breather, one cancelled plan doesn't mean you should
            stop being friends
          </Text>
          <TouchableOpacity className="bg-[#ff0000] flex-row items-center justify-center py-2 rounded-lg space-x-4">
            <Text className="text-white font-semibold text-lg">
              Delete group
            </Text>
            <AntDesign name="delete" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
