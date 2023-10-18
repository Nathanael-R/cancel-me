import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import Checkboxes from "./Checkboxes";
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
const AddPlan = () => {
  const [times, setTimes] = React.useState([
    {id: 1, title: "30 minutes", isChecked: false},
    {id: 2, title: "2 hours", isChecked: false},
    {id: 3, title: "6 hours", isChecked: false},
    {id: 4, title: "12 hours", isChecked: false},
  ])
  const randomUUID = Crypto.randomUUID();

  const checkChange = id => {
    const updateCheck = times.map(time => ({
      ...time,
      isChecked: time.id === id
    }))
    setTimes(updateCheck)
  }

  const prior = (idx) => {
    if (idx == 0) {
      setNewPlan({
        ...newPlan,
        priority: "Low",
      });
    } else if (idx == 1) {
      setNewPlan({
        ...newPlan,
        priority: "Medium",
      });
    } else
      setNewPlan({
        ...newPlan,
        priority: "High",
      });
  };
  const [newPlan, setNewPlan] = React.useState({
    id: randomUUID,
    title: "",
    location: "",
    date: "",
    setTime: "",
    description: "",
    priority: "",
  });
  // function addNewPlan() {
  //   setPlans((prev) => [...prev, newPlan]);
  // }
  return (
    <ScrollView className="px-5 flex-1 space-y-8">
      <View className="space-y-5 mt-12">
        <TextInput
          placeholder="Add a Title"
          placeholderTextColor="grey"
          value={newPlan.title}
          onChangeText={(text) => setNewPlan({ ...newPlan, title: text })}
          className="text-2xl font-semibold outline-none"
        />
        <View className="flex-row space-x-2">
          <Ionicons name="ios-location-outline" size={25} />
          <TextInput
            placeholder="Add a location"
            placeholderTextColor="grey"
            value={newPlan.location}
            onChangeText={(text) => setNewPlan({ ...newPlan, location: text })}
            className="text-lg font-semibold outline-none"
          />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row space-x-2 items-center">
            <Ionicons name="md-calendar-sharp" size={25} />
            <TextInput
              placeholder="Add a Date"
              placeholderTextColor="grey"
              value={newPlan.date}
              onChangeText={(text) => setNewPlan({ ...newPlan, date: text })}
              className="text-base outline-none font-semibold"
            />
          </View>
          <View className="flex-row space-x-2 items-center">
            <Ionicons name="ios-time-outline" size={25} />
            <TextInput
              placeholder="Add a Time"
              placeholderTextColor="grey"
              value={newPlan.setTime}
              onChangeText={(text) => setNewPlan({ ...newPlan, setTime: text })}
              className="text-base font-semibold outline-none"
            />
          </View>
        </View>
        <View>
          <Text className="text-base font-semibold">Description</Text>
          <TextInput
            placeholder="Add a description"
            placeholderTextColor="grey"
            multiline
            className="text-base font-semibold px-3 py-1 h-12"
            value={newPlan.description}
            onChangeText={text => setNewPlan({
              ...newPlan,
              description: text
            })}
          />
        </View>
      </View>
      <View className="space-y-3">
        <Text className="font-semibold text-lg">Priority</Text>
        <Text>Select a plan priority level</Text>
        <View className="flex-row space-x-3">
          {levels.map((lvl, idx) => {
            return (
              <Pressable
                onPress={() => prior(idx)}
                style={{ backgroundColor: lvl.color }}
                className="px-4 py-1 rounded-full"
                key={idx}
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
        <View className="space-y-4">
          {times.map((time) => {
            return (
              <View key={time.id} className="flex-row items-center space-x-3">
                <Checkboxes isChecked={time.isChecked} onValueChange={() => checkChange(time.id)}/>
                <Text className="text-lg">{time.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity onPress={() => console.log(newPlan)} className="border-2 items-center justify-center py-2 px-3 rounded-lg bg-[#FF9900] flex-row space-x-2 mb-6">
        <Text className="font-semibold text-lg">Post plan</Text>
        <MaterialIcons name="post-add" size={30} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddPlan;
