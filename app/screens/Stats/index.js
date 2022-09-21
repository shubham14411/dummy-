import React, { Component, useEffect } from "react"
import { View, Text, FlatList,Image } from "react-native"
import CalendarPicker from "react-native-calendar-picker"
import Pie from "react-native-pie"

import styles from "./styles"

export default function Stats({ navigation }) {
    const routine =[
        {
        name:"Activity Name",
        },
        {
        name:"Activity Name",
        }, 
        {
        name:"Activity Name",
        },
        {
        name:"Activity Name",
        },
        {
        name:"Activity Name",
        }, 
        {
        name:"Activity Name",
        }
]
  return (
    
      <View style={styles.container}>
        <Text style={styles.textStyle}>Stats</Text>
       <View style={{alignItems:'center',marginTop:"5%"}}>
       <Text>Quote: Lorem Ipsum is  simply dummy text of</Text>
       <Text style={{alignItems:'center',marginTop:5}}>the priting and typesetting industry</Text>
       </View>

       <View style={{marginTop:"5%",backgroundColor:'#E8E8E8',}}>
        <CalendarPicker
        />
       </View>

       <Text style={styles.textStyle2}>Your Progress</Text>
       <View style={{alignItems:'center',justifyContent:'center'}}>
        <Pie
        radius={80}
        sections={[
          {
            percentage: 10,
            color: '#C70039',
          },
          {
            percentage: 20,
            color: '#44CD40',
          },
          {
            percentage: 30,
            color: '#404FCD',
          },
          {
            percentage: 40,
            color: '#EBD22F',
          },
        ]}
        strokeCap={'butt'}/>
       </View>
      </View>
   
  )

} 