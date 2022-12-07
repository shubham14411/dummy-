import {View, Text, TouchableOpacity, Image, FlatList, SafeAreaView} from 'react-native';
import React from 'react';

const TodayTask = ({navigation}) => {
  const data = [
    {
      time: '10 AM',
      task: 'Landing page design',
      startTime: '10 AM - 1 PM',
    },
    {
      time: '1 PM',
      task: 'Landing page design',
      startTime: '1 PM - 4 PM',
    },
    {
      time: '4 PM',
      task: 'Mobile App Prototype',
      startTime: '4 PM - 6 pm',
    },
    {
      time: '6 PM',
      task: 'Hangout with friends',
      startTime: '6 PM - 10 PM',
    },
    {
        time: '4 PM',
        task: 'Mobile App Prototype',
        startTime: '4 PM - 6 pm',
      },
      {
        time: '6 PM',
        task: 'Hangout with friends',
        startTime: '6 PM - 10 PM',
      },
    
  ];

  const date=[
    {
        date:1,
        day: "Wed"
    },
    {
        date:2,
        day: "Thur"
    },{
        date:3,
        day: "Fri"
    },{
        date:4,
        day: "Sat"
    },{
        date:5,
        day: "Sun"
    },{
        date:6,
        day: "Mon"
    },{
        date:7,
        day: "Tue"
    },{
        date:8,
        day: "Wed"
    },{
        date:9,
        day: "Thur"
    },{
        date:10,
        day: "Fri"
    },{
        date:11,
        day: "Sat"
    },{
        date:12,
        day: "Sun"
    },{
        date:13,
        day: "Mon"
    },{
        date:14,
        day: "Tue"
    },{
        date:15,
        day: "Wed"
    },{
        date:16,
        day: "Thur"
    },{
        date:17,
        day: "Fri"
    },{
        date:18,
        day: "Sat"
    },{
        date:19,
        day: "Sun"
    },{
        date:20,
        day: "Mon"
    },{
        date:21,
        day: "Tue"
    },{
        date:22,
        day: "Wed"
    },{
        date:23,
        day: "Thur"
    },{
        date:24,
        day: "Fri"
    },{
        date:25,
        day: "Sat"
    },{
        date:26,
        day: "Sun"
    },{
        date:27,
        day: "Mon"
    },{
        date:28,
        day: "Tue"
    },{
        date:29,
        day: "Wed"
    },{
        date:30,
        day: "Thur"
    },

]

 const renderItem=({item})=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:24,marginVertical:20}}>
            <Text style={{marginVertical:20}}>{item.time}</Text>
            <TouchableOpacity>
            <View style={{backgroundColor:'white',padding:10,borderRadius:19,width:190}}>
            <Text style={{color:'black'}}>{item.task}</Text>
            <Text>{item.startTime}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
  }
  const itemSeparator=()=>{
    return(
        <View style={{height:0.5,width:"100%",backgroundColor:'grey'}}>

        </View>
    )
  }

  const renderDate=({item})=>{
    return(
        <TouchableOpacity>
        <View style={{backgroundColor:'white',borderRadius:20,width:50,marginHorizontal:10,padding:10}}>
            <Text style={{color:'black',textAlign:'center',marginVertical:10}}>{item.date}</Text>
            <Text style={{color:'black',textAlign:'center'}}>{item.day}</Text>
        </View>
        </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#b0c4de'}}>
    
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/back1.png')}
          />
        </TouchableOpacity>
        <Text
          style={{marginVertical: '5%', fontSize: 30, marginHorizontal: '5%'}}>
          Today's Task
        </Text>
        <TouchableOpacity>
          <Image
            style={{height: 55, width: 55}}
            source={require('../../assets/user.png')}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            marginVertical: '10%',
          }}>
          <View>
            <Text style={{fontSize: 30, color: 'black'}}>February, 14</Text>
            <Text>10 task today</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{height: 40, width: 40}}
              source={require('../../assets/calendar.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

<View style={{height:'14%'}}>
<FlatList
        horizontal
        data={date}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={renderDate}/>
</View>
      

<FlatList
        data={data}
        style={{marginVertical:20}}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}/>

       

          <TouchableOpacity
          style={{
            position:'absolute',
            alignItems:'center',
            justifyContent:'center',
            width:150,
            backgroundColor:'red',
            bottom:10,
            left:"30%",
            height:40,
            borderRadius:20
          }}
          onPress={()=>navigation.navigate('New')}>
            <Text style={{color:'white'}}>
                Add New Task
            </Text>
          </TouchableOpacity>   
    
    </SafeAreaView>
  );
};

export default TodayTask;
