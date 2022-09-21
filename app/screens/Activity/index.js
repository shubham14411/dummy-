import React, { Component, useEffect } from "react"
import { View, Text, FlatList,Image, TouchableOpacity } from "react-native"
import CountDown from "react-native-countdown-component"
import Button from "../../components/Button"

import styles from "./styles"

export default function Activity({ navigation }) {
    
  return (
    
      <View style={styles.container}>

        <Text style={styles.textStyle}>Activity Name</Text>
       
        <Image source={require('../../assets/Active.png')} style={{width:"70%",height:'50%'}}/>
       <Text>Lorem Ipsum dolor dit amet,consecteur</Text>
       <Text>adipiscing elit. Sed ipsum sem,volutpat et eros a,</Text>
       <Text>mattis aliquam ipsum. Proin hendrerit nunc a</Text>
       <Text>fermentum interdum.Aliquam erat volutpat.</Text>
       <Text>Curabitur egestats cursus felis.</Text>
       
       <CountDown
       until={60 * 3 + 30}
       size={20}
       onFinish={() => alert('Finished')}
       digitStyle={{backgroundColor: '#FFF'}}
       digitTxtStyle={{color: '#1CC625'}}
       timeToShow={['M', 'S']}
       timeLabels={{m: 'MM', s: 'SS'}}
       />
         <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Button 
            textstyle={{color:'red'}}
            name="Cancel"/>
            <TouchableOpacity>
            <Image source={require('../../assets/pause.png')} style={{width:50,height:50}}/>
            </TouchableOpacity>
            <Button 
            textstyle={{color:'blue'}}
            name="Next"/>
        </View>
      </View>
   
  )

} 