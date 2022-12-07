import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTasks from '../component/MyTasks';
import TodayTask from '../component/TodayTask';
import Show from '../component/showAll';
import NewTask from '../component/NewTask';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MyTasks"
        component={MyTasks}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TodayTask"
        component={TodayTask}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Show"
        component={Show}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="New"
        component={NewTask}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
