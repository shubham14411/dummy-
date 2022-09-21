import { NavigationContainer } from "@react-navigation/native"
import React, { Component, useEffect } from "react"
import { View, Text } from "react-native"
import { navigationRef } from "./common"
import Navigation from "./navigation"

export default function App({ navigation }) {
 
  return (
    
      <View style={{ flex: 1 }}>
       <NavigationContainer ref={navigationRef}>
        <Navigation/>
       </NavigationContainer>
      </View>
   
  )

} 