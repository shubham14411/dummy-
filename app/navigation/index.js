import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Routine from '../screens/Routine';
import Stats from '../screens/Stats';
import Activity from '../screens/Activity';
import MyTabs from './bottomTab';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Routine"
        component={Routine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Acitivity"
        component={Activity}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
