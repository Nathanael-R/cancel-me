import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const planData = [
  {
    id: 1,
    title: "Look at the Northern Lights",
    location: "Kay's house",
    date: "12 Aug - 15 Aug",
    priority: "Medium",
  },
  {
    id: 2,
    title: "Picnic",
    location: "Figma's park",
    date: "!4 Aug",
    priority: "High",
  },
  {
    id: 3,
    title: "Eat out",
    location: "60-40",
    date: "17 Aug",
    priority: "Low",
  },
];

const Plans = () => {
  return (
    <View className="py-10">
      <Text className="text-base mb-4">Upcoming Plans</Text>
      {planData.map((plan) => {
        return (
          <View className="border-2 p-3 rounded-xl space-y-2 mb-4" key={plan.id}>
            <Text className="text-lg font-semibold">
              {plan.title}
            </Text>
            <View className="flex-row space-x-2 items-center">
              <Ionicons name="ios-location-outline" size={25} />
              <Text className="text-base font-semibold">{plan.location}</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Ionicons name="md-calendar-sharp" size={25} />
              <Text className="text-base font-semibold">{plan.date}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="bg-[#E4BC2B] w-20 text-center py-2 rounded-full">
                {plan.priority}
              </Text>
              <View className="flex-row justify-between space-x-2">
                <Pressable className="flex-row items-center justify-center space-x-2 border-2 px-2 rounded-full">
                  <Text className="text-base font-medium">I'm in</Text>
                  <FontAwesome5 name="thumbs-up" size={15} />
                </Pressable>
                <Pressable className="flex-row items-center justify-center space-x-2 border-2 px-2 rounded-full">
                  <Text className="text-base font-medium">I'm out</Text>
                  <FontAwesome5 name="thumbs-down" size={15} />
                </Pressable>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Plans;
