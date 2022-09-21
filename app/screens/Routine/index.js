import React, { Component, useEffect } from "react"
import { View, Text, FlatList,Image } from "react-native"
import styles from "./styles"

export default function Routine({ navigation }) {
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
        <Text style={styles.textStyle}>Routine Name</Text>
        <View style={{backgroundColor:'white',flex:1,borderTopLeftRadius:70,borderTopRightRadius:70}}>
            <FlatList
            data={routine}
            renderItem={(item)=>{
                return(
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:40,marginTop:'5%'}}>
                        <View>
                        <Text style={styles.flatlistText}>{item.item.name}</Text>
                        <Text style={{marginLeft:"5%"}}>Details about the activity</Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:'4%'}}>
                        <Image source={require('../../assets/clock.jpeg')} style={{width:30,height:30}}/>
                        <Text style={{ marginTop:'4%'}}>3 min</Text>
                        </View>
                    
                    </View>
                )
            }}
            />
        </View>
      </View>
   
  )

} 