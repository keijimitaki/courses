import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavContents } from './components/NavContents';
import { DetailPage } from './screens/DetailPage';
import { TopPage } from './screens/TopPage';
import { SettingPage } from './screens/SettingPage';
import { DrawerContents } from './components/DrawerContents';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>

    <StatusBar
      backgroundColor="white"
      translucent={true}
    />

      <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#718355' }
        ,headerTintColor: '#E9F5DB'
        ,contentStyle: { backgroundColor: 'white' }
      }}>

      <Stack.Screen
        name="Drawer"
        component={DrawerContents}
        options={{ 
          title:'All Categories',
          headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailPage} />

    </Stack.Navigator>
  
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
