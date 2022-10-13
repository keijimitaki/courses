
import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View ,Button, SafeAreaView, SectionList, StatusBar, FlatList,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TopPage } from '../screens/TopPage';
import { FOODSHOPS } from '../DummyData';


export const NavContents = ({ navigation }) => {


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    },
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }    
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const press = () => {
    window.alert('clicked');
  }

  

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
      height: '60%',
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 64,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 48,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },

  });

  
  return (
    
    <>
    
        


      <Tab.Navigator initialRouteName="TopPage" 
        screenOptions={{
          tabBarStyle: { color: 'white' ,backgroundColor: '#718355' }
          ,tabBarActiveTintColor: 'white'
          ,tabBarInactiveTintColor: '#E9F5DB'
      }}
      >
        {/* <Tab.Screen name="Top" component={TopPage} options={{ fontSize: '24px' ,textColor: 'white', headerShown: false }}/> */}
        <Tab.Screen name="Menu1" component={TopPage} options={{ 
          textColor: 'white', headerShown: false, 
          tabBarLabel: 'メニュー1',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-sharp" color={color} size={size} />
          ),}}/>
        <Tab.Screen name="Menu2" component={TopPage} options={{ 
          textColor: 'white', headerShown: false, 
          tabBarLabel: 'メニュー2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-sharp" color={color} size={size} />
          ),}}/>
      </Tab.Navigator>

    </>




  );



  
}


// https://stackoverflow.com/questions/71832806/search-from-list-in-react-native

