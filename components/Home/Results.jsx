import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"
const Results = () => {
    const navigation = useNavigation()
  return (
    <Pressable className="absolute bottom-5 right-5 bg-[#E4BC2B] p-2 rounded-lg" onPress={() => navigation.navigate("AddPlan")}>
      <Entypo name='plus' size={35}/>
    </Pressable>
  )
}

export default Results
