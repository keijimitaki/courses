
import * as React from 'react';
import { StyleSheet, Text, View ,Button ,StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavContents } from './NavContents';

export const DrawerContents = ({ navigation }) => {

  const Drawer = createDrawerNavigator();

    {/*
   https://reactnavigation.org/docs/5.x/drawer-navigator/
    */}
    return (

    <Drawer.Navigator initialRouteName="NavContents" 
      screenOptions={{
        headerStyle: { backgroundColor: '#718355' }
        ,headerTintColor: '#E9F5DB'
        ,contentStyle: { backgroundColor: 'white' }
        ,drawerStyle: {
          backgroundColor: '#B5C99A'         
        }
        ,drawerActiveTintColor : '#718355'   
        ,drawerInactiveTintColor : 'white'
      }}

    >

      <Drawer.Screen name="TOP" component={NavContents} options={{ headerShown: true, drawerLabel: 'ドロワーメニュー 1' }} />
      <Drawer.Screen name="Drawer1" component={DrawerMenu1} options={{ drawerLabel: 'ドロワーメニュー 2' }} />
      <Drawer.Screen name="Drawer2" component={DrawerMenu2} options={{ drawerLabel: 'ドロワーメニュー 3' }}/>
    </Drawer.Navigator>
  );
}


// drawer menu
function DrawerMenu1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function DrawerMenu2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

