
import * as React from 'react';
import { StyleSheet, Text, View ,Button ,StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TopPage } from '../screens/TopPage';

export const DrawerContents = ({ navigation }) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Top" 
      screenOptions={{
        headerStyle: { backgroundColor: '#718355' }
        ,headerTintColor: '#E9F5DB'
        ,contentStyle: { backgroundColor: 'white' }
        ,drawerStyle: {
          backgroundColor: '#B5C99A'
          ,drawerItemStyle: {
            color: 'white'
          }
        }
        ,drawerActiveTintColor : '#718355'   
        ,drawerInactiveTintColor : 'white'   
    }}>

      <Drawer.Screen name="Top" component={TopPage} options={{ headerShown: true }}/>
      <Drawer.Screen name="Drawer1" component={DrawerMenu1}  />
      <Drawer.Screen name="Drawer2" component={DrawerMenu2} />
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

