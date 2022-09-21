import CheckBox from "@react-native-community/checkbox"
import React, { Component, useState } from "react"
import { View, Text,Image, TouchableOpacity, FlatList} from "react-native"
import styles from "./style"

export default function Home({ navigation }) {
    const plan =[
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
const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    
      <View style={styles.container}>

        <View style={styles.header}>
            <Image source={require("../../assets/threeLine.png")} style={{width:"10%",height:"55%"}}/>
            <Image source={require("../../assets/bell.png")} style={{width:"8%",height:"60%"}}/>
        </View>

        <Text style={styles.textStyle}>Hello</Text>
        <Text style={styles.textStyle2}>Day,Date</Text>
        <Text style={styles.RoutineText}>My Routine</Text>

        <View style={styles.boxStyle}>
            <Text style={styles.RoutineText}>Current Activity</Text>
            <Text style={{marginLeft:"6%"}}>Some Details</Text>
            <View style={styles.innerbox}>
                <View style={{flexDirection:'row'}}>
                <Text style={{textAlign:'center',width:"70%",margin:5}}>
                    Lorem Ipsum is  simply dummy text of the priting and typesetting industry
                </Text>
                <TouchableOpacity>
                <Image source={require("../../assets/play.jpeg")} style={{width:50,height:50,marginTop:10}}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={{flex:0.5}}>
        <Text style={styles.RoutineText}>Day Plan</Text>
            <FlatList
            data={plan}
            renderItem={(item)=>{
                return(
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:5}}>
                        <View>
                        <Text style={styles.flatlistText}>{item.item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../../assets/clock.jpeg')} style={{width:20,height:20}}/>
                        <Text style={{marginLeft:"5%"}}>Duration/Time</Text>
                        </View>
                        </View>
                        <CheckBox
                        disabled={false}
                        // value={toggleCheckBox}
                        // onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
                    </View>
                )
            }}
            />
        </View>
      </View>
   
  )

} 