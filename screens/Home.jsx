import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Dates from '../components/Home/Dates'
import Plans from '../components/Home/Plans'
import List from '../components/Home/List'
import Results from '../components/Home/Results'

const Home = () => {
  return (
    <View className="px-5 relative">
      <ScrollView showsVerticalScrollIndicator={false}>
      <Dates />
      <List />
      <Plans />
      </ScrollView>
      <Results /> 
    </View>
  )
}

export default Home