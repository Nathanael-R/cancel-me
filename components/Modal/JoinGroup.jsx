import { View, Text, TextInput, Switch, Pressable } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const JoinGroup = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="px-5 py-10 flex-1 justify-between">
      <View>
        <Text className="text-2xl mb-10 tracking-wide font-semibold">
          Join a group
        </Text>
        <View className="mb-4">
          <Text className="text-base font-semibold mb-2">
            Group invite link
          </Text>
          <TextInput
            placeholder="Copy or paste group link here"
            placeholderTextColor="grey"
            className="bg-slate-200 rounded-lg h-12 font-semibold text-base px-3 outline-none"
          />
        </View>
        <View>
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-semibold">
              Enable group notifications
            </Text>
            <Switch
              trackColor={{ false: "#76757740", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View className="bg-slate-100 rounded-lg flex-row space-x-2 p-2 items-center">
            <AntDesign name="exclamationcircleo" size={25} color="grey" />
            <Text style={{ color: "grey" }}>
              Disabling this means you won't get notified when new plans are set
            </Text>
          </View>
        </View>
      </View>
      <Pressable className=" flex-row space-x-4 justify-center border-2 py-3 rounded-lg items-center">
        <Text className="font-semibold text-xl">Join a group</Text>
        <MaterialCommunityIcons name="login" size={25} />
      </Pressable>
    </View>
  );
};

export default JoinGroup;
