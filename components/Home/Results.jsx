import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons"
const Results = () => {
  return (
    <Pressable className="absolute bottom-5 right-5 bg-[#E4BC2B] p-2 rounded-lg">
      <Entypo name='plus' size={35}/>
    </Pressable>
  )
}

export default Results
