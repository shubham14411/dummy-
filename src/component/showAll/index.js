import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Show({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#b0c4de'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: '10%',
        }}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}>
          <Image
            style={{height: 55, width: 55}}
            source={require('../../assets/back1.png')}
          />
        </TouchableOpacity>
        <Text
          style={{marginVertical: '5%', fontSize: 30, marginHorizontal: '5%'}}>
         Show All
        </Text>
      </View>
    </View>
  )
}