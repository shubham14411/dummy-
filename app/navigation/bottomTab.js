import React from 'react-native'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Routine from '../screens/Routine';
import Stats from '../screens/Stats';
import Activity from '../screens/Activity';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='Home'>
      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            return(
                <Image source={require('../assets/Home.png')} style={{width:20,height:20}}/>
            )
        }
        }} 
        name="Home" 
        component={Home} />

      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            return(
                <Image source={require('../assets/Routine.png')} style={{width:20,height:20}}/>
            )
        }}} 
        name="Routine" 
        component={Routine} />

      <Tab.Screen options={{
        headerShown:false,
        tabBarIcon:({focused})=>{
            return(
                <Image source={require('../assets/Stats.png')} style={{width:20,height:20}}/>
            )
        }}} 
        name="Stats" 
        component={Stats} />
      <Tab.Screen options={{
        headerShown:false,tabBarIcon:({focused})=>{
            return(
                <Image source={require('../assets/Activity.png')} style={{width:20,height:20}}/>
            )
        }}} 
        name="Activity" 
        component={Activity} />
    </Tab.Navigator>
  );
}
export default MyTabs;