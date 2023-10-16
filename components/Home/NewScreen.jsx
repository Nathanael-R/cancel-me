import { View, Text, Image, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
const NewScreen = () => {
    const navigation = useNavigation()
    return (
    <View className="flex-1 px-5 justify-center gap-y-6">
      <View>
        <Image source={require("../../assets/Hero.png")} className="h-60 w-full" />
      </View>
      <View>
        <Text className="text-lg font-semibold">
          You don't belong to any groups yet, create one and invite your friends or join one
        </Text>
      </View>
      <View className="gap-y-4">
        <Pressable className=" flex-row space-x-4 justify-center border-2 py-4 rounded-lg items-center" onPress={() => navigation.navigate("CreateGroup")}>
          <Text className="text-2xl font-semibold">Create a group</Text>
          <MaterialCommunityIcons name="home-group-plus" size={30}/>
        </Pressable>
        <Pressable className=" flex-row space-x-4 justify-center border-2 py-4 rounded-lg items-center" onPress={() => navigation.navigate("JoinGroup")}>
          <Text className="font-semibold text-2xl">Join a group</Text>
          <MaterialCommunityIcons name="login" size={30}/>
        </Pressable>
      </View>
    </View>
  )
}

export default NewScreen