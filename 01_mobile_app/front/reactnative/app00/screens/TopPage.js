
import * as React from 'react';
import { StyleSheet, Text, View ,Button, SafeAreaView, SectionList, StatusBar, FlatList,TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FOODSHOPS } from '../DummyData';

export const TopPage = ({ navigation }) => {
  
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
    <SafeAreaView style={styles.container}>


<FlatList
  data={FOODSHOPS}
  keyExtractor={(item, index) => item + index}
  ItemSeparatorComponent={ItemSeparatorView}
  renderItem={({ item }) => (
      <View>
        <Text style={{ color: 'green' }}>{item.name}</Text>
        <Text style={{ color: 'red' }} onPress={ (e) => {
              //alert('Id : ' + item.id + ' Title : ' + item.title);
              navigation.navigate('Detail',{'shop': item})
            }}
            >{item.memo}</Text>
        <Text style={{ color: 'blue' }}>{item.genre}</Text>
        
      </View>
    )}
  // renderSectionHeader={({ section: { title } }) => (
  //   <Text style={styles.header} onPress={ (e)=>{ alert(e)} }>{title}</Text>
  // )}
/>
</SafeAreaView>


    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>集計</Text>
    //   <Button
    //     title="詳細画面へ"
    //     onPress={() => navigation.navigate('Detail')}
    //   />
    // </View>    
  );
}
