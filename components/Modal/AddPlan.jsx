import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Checkbox } from "expo-checkbox";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
const levels = [
  {
    id: 1,
    title: "Low",
    color: "#00FF00",
  },
  {
    id: 2,
    title: "Medium",
    color: "#E4BC2B",
  },
  {
    id: 1,
    title: "High",
    color: "#FF0000",
  },
];

const times = [
  {
    id: 1,
    title: "30 minutes",
  },
  {
    id: 2,
    title: "2 hours",
  },
  {
    id: 3,
    title: "6 hours",
  },
  {
    id: 4,
    title: "12 hours",
  },
];
const AddPlan = () => {
  return (
    <View className="px-5 py-5 flex-1 space-y-5 relative">
      <Text className="text-2xl text-slate-400 font-semibold">Add a Plan</Text>
      <View className="flex-row space-x-2">
        <Ionicons name="ios-location-outline" size={25} />
        <Text className="text-lg text-slate-400 font-semibold">
          Add a location
        </Text>
      </View>
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-2 items-center">
          <Ionicons name="md-calendar-sharp" size={25} />
          <Text className="text-base text-slate-400 font-semibold">
            Click to Add a date
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Ionicons name="ios-time-outline" size={25} />
          <Text className="text-base text-slate-400 font-semibold">
            Add a time
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-base font-semibold">Description</Text>
        <TextInput
          placeholder="Add a description"
          multiline
          numberOfLines={4}
          className="border-b-2 text-base font-semibold py-3"
        />
      </View>
      <View className="space-y-3">
        <Text className="font-semibold text-lg">Priority</Text>
        <Text>Select a plan priority level</Text>
        <View className="flex-row space-x-3">
          {levels.map((lvl) => {
            return (
              <Pressable
                style={{ backgroundColor: lvl.color }}
                className="px-4 py-1 rounded-full"
                key={lvl.id}
              >
                <Text className="font-medium text-base">{lvl.title}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View className="space-y-3">
        <Text className="font-semibold text-lg">Poll Expiry</Text>
        <Text>Set a time for the poll to expire</Text>
        <View className="space-y-2">
          {times.map((time) => {
            return (
              <View key={time.id} className="flex-row items-center space-x-2">
                <Checkbox style={{height: 20, width: 20}}/>
                <Text className="text-lg">{time.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity className="border-2 w-36 items-center justify-center py-2 px-3 rounded-lg absolute bottom-5 right-5 bg-[#FF9900] flex-row space-x-1">
        <Text className="font-semibold text-lg">Post plan</Text>
        <Image
          source={require("../../assets/note-pin.svg")}
          className="h-8 w-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddPlan;
