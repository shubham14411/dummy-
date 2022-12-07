import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import MyTasks from './src/component/MyTasks'
import Navigation from './src/navigation'


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Navigation/>
      </NavigationContainer>
     
    </SafeAreaView>
  )
}
