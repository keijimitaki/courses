
import * as React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const DetailPage = ({ navigation, route }) => {

  const shopName = route.params.shop.name;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>詳細{shopName}</Text>
      <Button
        title="戻る"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>      
  );
}
