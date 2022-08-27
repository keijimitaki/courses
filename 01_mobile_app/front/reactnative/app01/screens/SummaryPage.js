
import * as React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const SummaryPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>集計</Text>
      <Button
        title="詳細画面へ"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>      
  );
}
