import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";

const dateData = [
  {
    id: 1,
    title: "This Month",
  },
  {
    id: 2,
    title: "To-do",
  },
  {
    id: 3,
    title: "Finished",
  },
];
const Dates = () => {
  return (
    <View>
      <Text className="text-3xl font-semibold mb-4">Plans</Text>
      <ScrollView
        horizontal={true}
        className="gap-x-2"
        showsHorizontalScrollIndicator={false}
      >
        {dateData.map((date) => {
          return (
            <Pressable className="border-2 py-3 px-5 rounded-full flex-row gap-x-1 items-center" key={date.id}>
              <Text className="font-semibold text-base">{date.title}</Text>
              <Text className="bg-green-400 px-3 py-1 rounded-full">0</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Dates;
