import { View, Text, TextInput, Switch, Pressable } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const CreateGroup = () => {
  const SwitchComp = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
      <View>
        <Switch
                trackColor={{ false: "#76757740", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
      </View>
    )
  }

  return (
    <View className="px-5 py-10 flex-1 justify-between">
      <View>
        <Text className="text-2xl mb-10 tracking-wide font-semibold">
          Create a group
        </Text>
        <View className="mb-4">
          <Text className="text-base font-semibold mb-2">Group name</Text>
          <TextInput
            placeholder="Enter group name here"
            placeholderTextColor="grey"
            className="bg-slate-200 rounded-lg h-12 font-semibold text-base px-3 outline-none"
          />
        </View>
        <View>
          <View className="mb-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold">
                Enable Anonymous Participation
              </Text>
              <SwitchComp />
            </View>
            <View className="bg-slate-100 rounded-lg flex-row space-x-2 p-2 items-center">
              <AntDesign name="exclamationcircleo" size={25} color="grey" />
              <Text style={{ color: "grey" }}>
                Enabling anonymous participation means you can't see who votes
                in polls
              </Text>
            </View>
          </View>
          <View>
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold">
                Anyone can make plans
              </Text>
              <SwitchComp />
            </View>
            <View className="bg-slate-100 rounded-lg flex-row space-x-2 p-2 items-center">
              <AntDesign name="exclamationcircleo" size={25} color="grey" />
              <Text style={{ color: "grey" }}>
                Disabling this means only you can make plans for the group
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable className=" flex-row space-x-4 justify-center border-2 py-3 rounded-lg items-center">
        <Text className="font-semibold text-xl">Create a group</Text>
        <MaterialCommunityIcons name="home-group-plus" size={25} />
      </Pressable>
    </View>
  );
};

export default CreateGroup;
